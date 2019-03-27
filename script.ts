interface Choices {
    left:{id:number, answer:string},
    right:{id:number, answer:string}
}
class StoryStep {
    id:number;
    question:string;
    cases:Choices;
    constructor(id:number, question:string, cases:Choices){
        this.id = id
        this.question = question
        this.cases = cases;
       

    }
}
/* let storySteps: object[] = [object]; */
let storySteps: Array<object> = [];

/* let stepOneChoice = {left:{id:2, answer:"dog"}, right:{id:3, answer:"horse"}}
getChoice(stepOneChoice) */
let stepOne = new StoryStep(1, "Choose dog   Or horse",{left:{id:2, answer:"dog"}, right:{id:3, answer:"horse"}});
let stepTwo = new StoryStep(2, "Choose  cat or mouse", {left:{id:4, answer:"cat"}, right:{id:5, answer:"mouse"}});
let stepThree = new StoryStep(3, "Choose between get and sushi", {left:{id:4, answer:"get"}, right:{id:5, answer:"sushi"}});
let stepFour = new StoryStep(4, "choose tree or pasta", {left:{id:1, answer:"tree"}, right:{id:2, answer:"pasta"}});
let stepFive = new StoryStep(5, "Choose typescript or javascript", {left:{id:1, answer:"typescript"}, right:{id:2, answer:"vanila/javascript"}});
storySteps.push(stepOne, stepTwo, stepThree, stepFour, stepFive)

let curreStep: object
let leftButton: HTMLElement | null
let rightButton: HTMLElement | null
let pTagg: HTMLElement | null
function init(){
    leftButton = document.getElementById("leftButton")
    rightButton = document.getElementById("rightButton")
    pTagg = document.getElementById("pTagg")
    if(leftButton){
        
        leftButton.innerText = storySteps[0].cases.left.answer;
        
    }
    if(rightButton) {
        rightButton.innerText = storySteps[0].cases.right.answer;
    }
    if(pTagg) {
        pTagg.innerText = storySteps[0].question;
    }
   

    curreStep = storySteps[0];
    
}


function getLeftStories(choice: string){
    let nextStep;
    storySteps.forEach(element =>{
        if(choice == "left"){
            if(curreStep){
                //console.log(curreStep)
                if(element.id == curreStep.cases.left.id) {
                    nextStep = element;
                }
            }
        }
    })

    if(nextStep) {
        curreStep = nextStep
        updateGame()
    }
}

function getRightStories(choice: string) {
    let nextStep;
    storySteps.forEach(element =>{
        if(choice == "right"){
            if(curreStep){
                if(element.id == curreStep.cases.right.id) {
                    if(pTagg && leftButton && rightButton) {
                        nextStep = element;
                    }
                }
            }
        }
    })

    
    if(nextStep) {
        curreStep = nextStep
        updateGame()
    }

}

function updateGame(){
    if(pTagg && leftButton && rightButton) {
    
        pTagg.innerText = curreStep.question
        leftButton.innerText = curreStep.cases.left.answer;
        rightButton.innerText = curreStep.cases.right.answer;
                  
    }
}
    