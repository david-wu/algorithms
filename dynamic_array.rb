class DynamicArray < Array

	def initialize(arr_size = 4)
		@arr_size = arr_size
		@first = -1
		@last = 0
		@size = 0
		super(@arr_size)
	end

	def push(ele)
		@size += 1
		@first += 1
		if(@first >= @arr_size-1)
			@first -= @arr_size
		end
		self[@first] = ele
		check_resize
	end

	def pop
		@size -= 1
		@first -= 1
		if(@first <= -(@arr_size-1))
			@first += @arr_size
		end
		check_resize
		self[@first+1]
	end

	def unshift(ele)
		@size += 1
		@last -= 1
		if @last < -(@arr_size-1)
			@last += @arr_size
		end
		self[@last] = ele
		check_resize
	end

	def shift
		@size -= 1
		@last += 1
		if @last > (@arr_size-1)
			@last -= @arr_size
		end
		check_resize
		self[@last-1]
	end

	private
	def check_resize
		if @size >= @arr_size
			p 'resize! O(n)'
			@arr_size *= 2
			self[@arr_size-1] = nil

			@temp = @last
			until @temp == 0 || @temp == @arr_size
				self[@temp] = self[@temp - (@arr_size/2)]
				@temp+=1
			end
		end
	end
end

da = DynamicArray.new(2)
(0..12).each do |val|
	da.unshift(val)
	p da.shift
end
(0..12).each do |val|
	da.push(val)
	p da.pop
end
(0..12).each do |val|
	da.push(val)
	p da.shift
end
(0..12).each do |val|
	da.unshift(val)
	p da.pop
end

