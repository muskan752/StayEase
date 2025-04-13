document.querySelector(".expansion-button").addEventListener("click",function(){
  document.querySelector('.destination-grid').classList.add("body-blur");
  document.querySelector('.search-expansion').classList.remove("hidden");


})
document.querySelector(".close-search-expansion").addEventListener("click",function(){
  document.querySelector('.destination-grid').classList.remove("body-blur");
  document.querySelector('.search-expansion').classList.add("hidden");

})

document.querySelector(".profile").addEventListener("click",function(){
  document.querySelector(".profile-expansion").classList.remove("hidden");
})
document.querySelector(".profile").addEventListener("dblclick",function(){
  document.querySelector(".profile-expansion").classList.add("hidden");
})
