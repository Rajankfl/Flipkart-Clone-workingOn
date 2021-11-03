Updating 'apiData' API value with the filters applied;

What apiData includes:-

1. It's an Array with nested Object;
2. For filtering this with 'filtrations' Object with nested Array inside, we are using .filter() ArrayFunction;
   Way of updating...
   // let newApiData = apiData.filter((val)=>{

})

|| props.filterToApply.offer.length || props.filterToApply.availability.length || props.filterToApply.rating.length !== 0 || props.filterToApply.discount.length !== 0
