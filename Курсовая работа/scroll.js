
//поднять вверх
function Top(){
window.scrollTo(pageXOffset, 0);
};
window.addEventListener('scroll', function() {
arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});
//слайдер

let a = 0; //cмещение
const b = document.querySelector('.slider-line');
let c = 2;

function init()
{
	
	console.log('resize');
	c=2;
    while (c<9) 
{
	
  if (window.innerWidth<((240*c)+20))
  {
	 document.querySelector('.slider-line').style.width=240*(c-1)-1+'px';
	  e=c;
		c=100;
  }
  else
	{
	 c=c+1;
	}
 }
}

window.addEventListener('resize',init);
init();


document.querySelector('.slider-next').addEventListener('click', function(){
    a = a + 240;
    if (a > 240*(6+(6-e))) 
    {
        a = 0;
    }
    b.style.left = -a + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    a = a - 240;
    if (a < 0) 
    {
        a = 240*(6+(6-e));
    }
    b.style.left = -a + 'px';
});
//

    