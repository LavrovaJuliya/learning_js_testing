
function work(a,b){
   alert(a + b);
}
function spy(work){
  return function(){
    return work.apply(this,arguments)
    }
  }
work = spy(work);
work(1,2);
work(4,5);
			
		
			
		
	
	
