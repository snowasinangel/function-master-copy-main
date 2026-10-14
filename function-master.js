//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
	// CODE HERE
	return Object.values(object)
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object){
	// CODE HERE
	//take object
	//return keys
	//keys should be strings
	//keys should be separated by a space
	return Object.keys(object).join(' ')
}

	//to separate anything by a space, you have to use join
	//keys of objects will already be strings
	//you don't need to converse object keys to strings with .toString
	//to return the object keys as they are you just use Object.keys(object) method

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
	// CODE HERE
	//return strings of object using object.values method
	/*var valuesString = Object.values(object)
	return valuesString.join(' ')
	*/

	//return only the strings of the object
	//iterate through the object and only find the strings
	//how to iterate through objects in javascript
	//i need to convert the object parts into an array
	//i can use the for of or the for in loop
	//let's try for of because for in didn't work for me
	var objValuesArray = Object.values(object)
	var objStringsArray = []

	for (let i = 0; i <= objValuesArray.length - 1; i++) {
		console.log(objValuesArray[i])
		if (typeof objValuesArray[i] === 'string') {
			objStringsArray.push(objValuesArray[i])
		}
	}
			return objStringsArray.join(' ')
		}


console.log(valuesToString(abc = {one: 1, two: 2, three: 3}))

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
	// CODE HERE
	if (Array.isArray(collection)) {
		return 'array'
	}

	if (typeof collection === 'object')
		return 'object'
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
	// CODE HERE
	return string.charAt(0).toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
	// CODE HERE
	//create an array of words by splitting the string at the spaces
	const stringArray = string.split(' ')
//start with the first word at index 0
//run the loop for as many words are in the string
//move to the next word after each iteration
	for(let i = 0; i < stringArray.length; i++) {
		stringArray[i] =
	//stringArray[i].charAt(0) = gets the first character of the current word
	//.toUpperCase() capitalizes the character from previous step
	//.slice(1) gets the rest of the word without the original first lowercase character

		stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1)
		
		//use the addition sign to connect the cap first letter to remaining characters
	}
	//connect the capped words back into a string
	return stringArray.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
	// CODE HERE
	const capitalizedName = object.name.charAt(0).toUpperCase() + 
	object.name.slice(1)
	return `Welcome ${capitalizedName}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
	// CODE HERE
	const capitalizedName = object.name.charAt(0).toUpperCase() + 
	object.name.slice(1)
	const capitalizedSpecies = object.species.charAt(0).toUpperCase() + 
	object.species.slice(1)
	return `${capitalizedName} is a ${capitalizedSpecies}`
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
	// CODE HERE
	//check to see if there is an object.noises array
	//ALSO check to see that if there is a noises array, that it has
	//at least one value in it
	if (Array.isArray(object.noises) && 
	object.noises.length > 0) {
		return object.noises.join(' ')
	}
		return 'there are no noises'
		
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
	// CODE HERE
	//need somewhere to hold the string as an array
	const stringSplit = string.split(' ')
//need to iterate through the string as an array to 
	for(let i = 0; i < stringSplit.length; i++) {
		//see if any of the indexes match the word parameter
		if (stringSplit[i] === word) {
			return true
		}
	}
	//and if not return false
	return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
	// CODE HERE
	//object.friends is an array
	//i want to put a name in it
	object.friends.push(name)
	return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
	// CODE HERE
	
	if(!Array.isArray(object.friends)) {
		return false
	}

	for (let i = 0; i < object.friends.length; i++) {
		if (object.friends[i] === name) {
			return true
		}
 	}
	return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
	// CODE HERE
 
	//have a place to put all the non friends
	//so i can push the non friends into it
	//and return them by themselves
	var notFriends = []

	var friends = []

	//see if the array of friends has anything in it and if so 
	
	//iterate through the array index to connect it to a name
	for (let i = 0; i < array.length; i++) {
	//if the name balonging to that array index 
	//matches the one in the parameter
		if (array[i].name === name) {
			//var friends refers to that person's array of friends
			friends = array[i].friends

		}
	}

	//iterate through the list of people and
		for (let i = 0; i < array.length; i++) {
			//if the person (name)
			//doesn't have anyone in the data as a friend
			//return those friends in an array of their own
			let personName = array[i].name
			
			if (
				personName !== name &&
				!friends.includes(personName)
			){ 
				notFriends.push(personName)

			}
		}
		return notFriends
	}
	
	


var data = [
  { name: "Jimmy", friends: ["Sara", "Liza"] },
  { name: "Bob", friends: [] },
  { name: "Liza", friends: ["Jimmy"] },
  { name: "Sara", friends: ["Jimmy"] },
];

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
	// CODE HERE
	//update the property key on object
	//put new value
	//if key does not exist on object, create it
object[key] = value
return object
	}
	


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
	// CODE HERE
	//array of strings
	//remove any properties on an object 
	//listed in array
	for (let i = 0; i < array.length; i++) {
		delete object[array[i]]
		}
return object
}


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
	// CODE HERE

	let uniqueValues = []

	for (let i = 0; i < array.length; i++) {
		if (!uniqueValues.includes(array[i])){
		uniqueValues.push(array[i])
		}
	}
	return uniqueValues
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if (
	typeof process !== "undefined" &&
	typeof process.versions.node !== "undefined"
) {
	// here, export any references you need for tests //
	module.exports.objectValues = objectValues;
	module.exports.keysToString = keysToString;
	module.exports.valuesToString = valuesToString;
	module.exports.arrayOrObject = arrayOrObject;
	module.exports.capitalizeWord = capitalizeWord;
	module.exports.capitalizeAllWords = capitalizeAllWords;
	module.exports.welcomeMessage = welcomeMessage;
	module.exports.profileInfo = profileInfo;
	module.exports.maybeNoises = maybeNoises;
	module.exports.hasWord = hasWord;
	module.exports.addFriend = addFriend;
	module.exports.isFriend = isFriend;
	module.exports.nonFriends = nonFriends;
	module.exports.updateObject = updateObject;
	module.exports.removeProperties = removeProperties;
	module.exports.dedup = dedup;
}
