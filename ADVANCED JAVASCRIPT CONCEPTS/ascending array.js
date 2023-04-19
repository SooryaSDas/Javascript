function Numeric_sort(ar) {
    var i = 0, j;
                
    while (i < ar.length) {
        j = i + 1;
        while (j < ar.length) {
            
            if (ar[j] < ar[i]) {
                var temp = ar[i];
                ar[i] = ar[j];
                ar[j] = temp;
            }
            j++;
        }
        i++;
    }		
  
}
// Original Array
var arr = [1, 15, 10, 45, 27, 100];
		
// Print Before sorting array
console.log("Original Array");
console.log(arr);
    
// Function call
Numeric_sort(arr);
    
console.log("Sorted Array");
    
// Print sorted Numeric array
console.log(arr);
