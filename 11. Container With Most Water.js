var maxArea = function (height) {
 let left = 0;
 let right = height.length-1
 let MaxWater  = 0
 while(left<right){
    let h =Math.min(height[left],height[right])
    let w = right - left
    let water = h*w

    MaxWater = Math.max(MaxWater,water)

    if(height[left]<height[right]){
        left++
    }else{
        right--
    }
 }
 return MaxWater
};

height = [1, 8, 6, 2, 5, 4, 8, 3, 8];

console.log(maxArea(height));
