

const hex_num = ['0','1','2','3','4','5','6','7','8','9','e','b','c','d','e','f'] ;
var correct_num = 0;
var wrong_num = 0;
var reset_time = 2000; // in ms



function create_colors(hex_num){

    const reset_button_colors = document.querySelectorAll('.option');
    console.log(reset_button_colors.length)

    for (i=0;i<reset_button_colors.length;i++){
        reset_button_colors[i].style.backgroundColor='white';
        reset_button_colors[i].style.color='black';
    }


    const num_of_colors = 3;
    const num_of_picks = 6;
    const colors = [];

    var picks = [];

    for (i=0;i<num_of_colors;i++){
        for (j=0;j<num_of_picks;j++){
            pick_random = hex_num[Math.floor(Math.random()*hex_num.length)];
            picks.push(pick_random);
        }
    
        var joined_picks = '#'+picks.join("");

        colors.push(joined_picks);
    
        picks = [];
    }

    return colors;
}

function select_color (){
    colors = create_colors(hex_num);
    num_of_choices = colors.length;

    const options = document.querySelectorAll('.option');
    const boxy = document.getElementById('boxy');
    const header = document.getElementById('header');

    for (i=0;i< num_of_choices; i++){
        options[i].innerHTML= colors[i];
    }

    const pick_color = colors[Math.floor(Math.random()*colors.length)];

    boxy.style.backgroundColor=pick_color;
    header.style.color=pick_color;
    
}

function btn_cooldown() {
    var buttons = document.querySelectorAll('.option');


    for (i=0;i<buttons.length;i++){
        buttons[i].disabled = true;
    }

    setTimeout(() => {
        buttons[0].disabled = false;
        buttons[1].disabled = false;
        buttons[2].disabled = false;
    }, reset_time);
}

function color_pick(num_of_button){

    // translates rgb to hex
    const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

    const btn = document.getElementById(num_of_button);
    const btn_color = document.getElementById(num_of_button).innerHTML;
    
    const boxy = document.getElementById('boxy');
    const boxy_color_untranslated = boxy.style.backgroundColor;
    const boxy_color = rgb2hex(boxy_color_untranslated);
    const text_output = document.querySelector('.boxy_comment');

    const correct_answers = document.getElementById('correct_answer_num');
    const wrong_answers = document.getElementById('wrong_answer_num'); 

    if ( btn_color === boxy_color){
        text_output.innerHTML = 'correct!';
        correct_num++;

        if (correct_num == 10){
            text_output.innerHTML = "Wow your pretty good at this :D";
        }

        btn.style.backgroundColor = 'green';
        btn.style.color = 'white';

        btn_cooldown();
        
        setTimeout(() => {
            create_colors(hex_num);
            select_color();
            text_output.innerHTML = "What color am i?";



        }, reset_time);

    }
    else{
        text_output.innerHTML = "nope that's not it.";
        wrong_num++;

        btn.style.backgroundColor = 'red';
        btn.style.color = 'white';
        
        btn.disabled = true;
        
    }


    correct_answers.innerHTML = correct_num;
    wrong_answers.innerHTML = wrong_num;


}

create_colors(hex_num);
select_color();



