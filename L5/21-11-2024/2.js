// Read about Trapping Rain Water problem (Self study)

function trap(height) {
    let n = height.length;
    if (n === 0) return 0;

    let left = 0, right = n - 1;
    let maxLeft = 0, maxRight = 0;
    let water = 0;

    while (left <= right) {
        if (height[left] < height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                water += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                water += maxRight - height[right];
            }
            right--;
        }
    }

    return water;
}

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));