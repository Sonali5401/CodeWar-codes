/* likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"*/

function likes(arr){
    let result = ''
    if(arr.length === 0){
        result = 'no one likes this'
    } else if (arr.length === 1){
        result = `${arr[0]} likes this`
    }else if (arr.length === 2){
        result = `${arr[0]} and ${arr[1]} like this`
    }else if (arr.length === 3){
        result = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
    } else if (arr.length>3){
        result = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others likes this`
    }
        return result
}

function likes2(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))