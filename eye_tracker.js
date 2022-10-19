window.addEventListener('mousemove', function (e){

    var eye = document.querySelectorAll('.eye');

        for (i=0, len=eye.length; i<len; i++){

        let x = (eye[i].getBoundingClientRect().right) ;

        let y = (eye[i].getBoundingClientRect().top) ;

        let radian = Math.atan2(e.x - x, e.y - y);

        let rot = (radian * (180 / Math.PI) * -1) + 270;

        eye[i].style.transform = "rotate("+rot+"deg)";

    }
});