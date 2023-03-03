function mergeSort(arr1,arr2) {
    var ans = [];
    var i = 0;
    var k = 0;
    var j = 0;
    while(i<arr1.length && j<arr2.length){
       if(arr1[i] <= arr2[j]){
            ans[k++] = arr1[i]
            i++;
       }else{
            ans[k++] = arr2[j];
            j++;
       }
    }
    while(i<arr1.length){
        ans[k++] = arr1[i++]
    }
    while(j<arr2.length){
        ans[k++] = arr2[j++] 
    }
}