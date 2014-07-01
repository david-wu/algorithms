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
		self[@first] = ele
		check_resize
	end

	def unshift(ele)
		@size += 1
		@last -= 1
		self[@last] = ele
		check_resize
	end

	private
	def check_resize

		p self

		#prevent @last from getting to big
		if @last < (-1) * @arr_size
			@last += @arr_size
			p 'redo last'
		end

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

da = DynamicArray.new(3)
(0..12).each do |val|
	da.unshift(val)
end