const places = ['saudi arab', 'japan', 'paris'];
places.push('england');
console.log(places);
[ 'saudi arab', 'japan', 'paris', 'england' ]


places.push('tasmania', 'island');
console.log(places);
[ 'saudi arab', 'japan', 'paris', 'england' ]
[ 'saudi arab', 'japan', 'paris', 'england', 'tasmania', 'island' ]


places.pop();
console.log(places);
[ 'saudi arab', 'japan', 'paris', 'england' ]
[ 'saudi arab', 'japan', 'paris', 'england', 'tasmania', 'island' ]
[ 'saudi arab', 'japan', 'paris', 'england', 'tasmania' ]