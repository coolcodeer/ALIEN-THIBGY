//https://teachablemachine.withgoogle.com/models/Ze4k0iTlv/

function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ze4k0iTlv/model.json',modelready);

}
function modelready(){
    classifier.classify(gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I CAN HEAR - "+ results[0].label;
        document.getElementById("result_confidence").innerHTML="ACCURACY - "+ (results[0].confidence*100).toFixed(2)+"%";
        
        document.getElementById("result_label").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img1=document.getElementById("a1");
        img2=document.getElementById("a2");
        img3=document.getElementById("a3");
        img4=document.getElementById("a4");

        if(results[0].label == "clap"){
            img1.src="aliens-01.gif";
            img2.src="aliens-02.png";
            img4.src="aliens-04.png";
            img3.src="aliens-03.png";

        }
        else if(results[0].label == "snapping"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.gif";
            img4.src="aliens-04.png";
            img3.src="aliens-03.png";

        }
        else  if(results[0].label == "stapler"){
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img4.src="aliens-04.png";
            img3.src="aliens-03.gif";

        }
        else{
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img4.src="aliens-04.gif";
            img3.src="aliens-03.png";

        }








        }

}