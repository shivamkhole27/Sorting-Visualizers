

//Variables 
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";
/*used to set or return the direction of placement of flex elements.
Thisdisplays the flex items as row horizontally and is the defaultvalue*/

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";
    /*The innerHTML property can be used to write
     the dynamic html on the html document.*/

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        /*Math.floor(Math.random() * (max - min + 1)) + min;
        Returns a random number between min (inclusive) and max (exclusive)*/
        divs[i]=document.createElement("div");// create a new div element, section for arrays

        // const blockLabel = document.createElement("label");
        // blockLabel.classList.add("div");
        //  blockLabel.innerHTML = value;
        // cont.appendChild(blockLabel);

        cont.appendChild(divs[i]);//cont providing dynamic values in dives[i]
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:orange; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
        //margin is gap between two bars
        //width for bar is calculated by for ex -array size is 20 then (100/20-(2*0.1)) = 4.8 this will be width of bars
        //hight is the size of randomly generated array  
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//Running algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble":Bubble();
                        break;
        case "Selection":Selection_sort();
                        break;
        case "Insertion":Insertion();
                        break;
        case "Merge":Merge();
                        break;
        case "Quick":Quick();
                        break;
        case "Heap":Heap();
                        break;
    }
}
