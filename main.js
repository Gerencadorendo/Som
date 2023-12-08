function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/i5xuPAcaE/model.json',modelReady)
}

function modelReady(){
    console.log("modelo carregado")
    classifier.classify(gotResults)
}

function gotResults(error,results){
    console.log(results)
}