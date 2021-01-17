var camera=document.getElementById("camera");

Webcam.set({
    width:300,
    height:310,
    image_format: 'png',
png_quality:100,

constraints:{
    facingMode:"enviroment"
}

});

Webcam.attach("#camera");

function takeSnapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img id="captured_image" src="'+ data_uri+'"/>';
        });

}
console.log('ml5', ml5.version);
classifier=ml5.imageClassifier('Mobilenet', modelLoaded)

function modelLoaded(){
    console.log('Your Model has been loaded!')
}

function identifyImage(){
 img=document.getElementById('captured_image');
 classifier.classify(img, gotresult);
}

function gotresult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label; 
    }
}

