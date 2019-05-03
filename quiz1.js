(function myFunction(){
const question = [];	
	var myQuestion=[
	{
		question:"who is the Prime Minster of India?",
		answer:{
			a: "Rahul Gandhiandhi",
			b: "Mayavati",
			c: "Manmohan Singh",
			d: "Narendra Modi"
		},
		CorrectAnswer: "d"
	},
	{
		question:"who is the Chife Minster of delhi?",
		answer:{
			a:"Pema Khandu",
			b:"Shri Vijaybhai R. Rupani	",
			c:"Shri Raghubar Das	",
			d:"Shri Arvind Kejriwal	"
		},
		CorrectAnswer: "d"
	},
	{
		question:"who is the Caption of india cricket team?",
		answer:{
			a:"Rohit sharma",
			b:"virat kohhi",
			c:"m.s dhoni",
			d:"Suresh raina"
		},
		CorrectAnswer:"b"
	},
{
		question:"who is the first prime minster of india ?",
		answer:{
			a:"Gulzarilal Nanda",
			b:"Lal Bahadur Shastri",
			c:"Indira Gandhi",
			d:"Jawaharlal Nehru"
		},
		CorrectAnswer:"d"
	}
	];
		
		function createQuiz(){
				myQuestion.forEach(function(currentQuestion, index){
					const answer = [];
					for( letters in currentQuestion.answer){
						answer.push(
								  `<label>
									 <input type="radio" name="question${index}" value="${letters}">
									  ${letters} :
									  ${currentQuestion.answer[letters]}
								   </label><br>`
						);
					}
					question.push(
					`<div class="slide" id ="question${index}">
					   <div class="question"> ${currentQuestion.question} </div>
					   <div class="answers"> ${answer.join("")} </div>
					 </div>`
					);
				});
				document.getElementById("quiz").innerHTML = question.join("");
			  showStart();
        }
	  var number=0;
      const resultsContainer = document.getElementById("results");
      const nextButton = document.getElementById("next");
      const submitButton = document.getElementById("submit");
      nextButton.addEventListener("click", showNext);
      submitButton.addEventListener("click", result);
	  
      //code  start quiz
	function showStart(){
		for( i=1; i<=question.length; i++){
		 var node= document.getElementById("question"+i).style.display="none";
     }
	}
	//code end  start quiz
	//code next question of quiz
	function showNext(){
    number++;

    var targetDiv = document.getElementById("quiz").getElementsByClassName("slide");
    document.getElementById("question"+number).style.display="block";
     for(var a=0; a<number; a++){
     document.getElementById("question"+a).style.display="none";
     }
      for(var b=question.length; b>number; b--){
     document.getElementById("question"+b).style.display="none";
     }
	}
	// end code of next question
	//code result showing
	function result(){
		  let RightQuestion = 0;
		  myQuestion.forEach((currentQuestion, index) => {   
			 var ans= document.querySelector('input[name = question'+index+']:checked').value;
			 if(ans == currentQuestion.CorrectAnswer){  
				   RightQuestion++;
			 }
		  });	
		   document.getElementById('results').innerHTML=RightQuestion+"   "+"out of"+"    "+question.length;
    }
//end result showing
createQuiz();
}
)();

//code for time
var count = 0; 
var clearTime;
 var seconds = 0, minutes = 0, hours = 0; 
 var clearState; 
 var secs, mins, gethours ; 
 
 function startWatch( ) { 
 if ( seconds === 60 ) { 
 seconds = 0; minutes = minutes + 1; 
 }
 mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' ); 
 if ( minutes === 60 ) {
 minutes = 0; hours = hours + 1; 
 } 
 gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); 
 secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds ); 
var x = document .getElementById("basicUsage"); x.innerHTML = 'Time: ' + gethours + mins + secs; 
 seconds++; 
 clearTime = setTimeout( "startWatch( )", 1000 ); 
 } 
startWatch();
 
function stopTime( ) { 
	if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) {
		 var fulltime = document .getElementById( "basicUsage" ); 
		 var time = gethours + mins + secs; 
		fulltime.innerHTML = 'Fulltime: ' + time; 
		 seconds = 0; minutes = 0; hours = 0; 
		 secs = '0' + seconds; mins = '0' + minutes + ': '; gethours = '0' + hours + ': '; 
		 var x = document.getElementById ("basicUsage"); 
		 var stopTime = gethours + mins + secs; 
		 x.innerHTML = stopTime; 
		 document.getElementById('CompleteTimeime').innerHTML="complete Time in "+"  "+time;
		clearTimeout( clearTime ); 
	}
} 
 window.addEventListener( 'load', function ( ) { var stop = document.getElementById ("submit"); stop.addEventListener( 'click', stopTime ); }); 
//end code of time