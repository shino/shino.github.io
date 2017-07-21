#!/usr/bin/env ruby

class Quote
  @inside_quote = false

  def maybe_start()
    return if @inside_quote
    puts "```"
    @inside_quote = true
  end

  def maybe_close()
    return unless @inside_quote
    puts "```"
    @inside_quote = false
  end
end

$quote = Quote.new

def read_body1(lines)
  loop do
    line = lines.peek()
    if (/^ -{3}/ =~ line) || (/^  OTP-/ =~ line)
      break
    else
      if line.chomp.length > 0
        $quote.maybe_start()
        puts line
      end
      lines.next()
    end
  end
  $quote.maybe_close()
end

def trim_buffer(buffer)
  loop do
    break unless buffer[0].chomp == ""
    buffer.shift
  end
  loop do
    break unless buffer.last.chomp == ""
    buffer.pop
  end
  buffer
end

def read_item_body(lines)
  buffer = []
  will_exit = false
  loop do
    begin
      line = lines.peek()
    rescue StopIteration
      will_exit = true
      break
    end

    if /(POTENTIAL INCOMPATIBILITY)/ =~ line
      puts "- **#{Regexp.last_match[1]}**"
    elsif /(HIGHLIGHT)/ =~ line
      puts "- **#{Regexp.last_match[1]}**"
    elsif /(Related Id.*)$/ =~ line
      puts "- #{Regexp.last_match[1]}"
    end

    if (/^          / =~ line) || (/^$/ =~ line)
      buffer << line
      lines.next()
    else
      break
    end
  end
  puts
  $quote.maybe_start()
  puts trim_buffer(buffer)
  $quote.maybe_close()
  exit() if will_exit
end

def h1(label)
  puts "", label
  puts "=" * label.length, ""
end

def h2(label)
  puts "", "## #{label}", ""
end

def h3(label)
  puts "", "### #{label}", ""
end

def lines_next(lines)
  begin
    lines.next
  rescue StopIteration
    exit
  end
end

def main(lines)
  h1("Erlang/OTP XX.X Release README")
  read_body1(lines)

  while line = lines_next(lines) do
    if /^ -{60}/ =~ line
      # beginning of large header, like HIGHLIGHTS
      /^ --- (.*) -+$/ =~ lines.next()
      if Regexp.last_match
        h1(Regexp.last_match[1])
        # skip next line, which should be " -------..."
        lines.next()
        read_body1(lines)
      end
    elsif /^ --- (.*) ---$/ =~ line
      # beginning of small header, like "Fixed Bugs and Malfunctions"
      h2(Regexp.last_match[1])
    elsif /^ +(OTP-.*)$/ =~ line
      h3(Regexp.last_match[1])
      read_item_body(lines)
    else
      # Print out untreated lines
      # puts "**************#{line.chomp}*************" if line.chomp.length > 0
    end
  end
end

main(STDIN.each_line())
