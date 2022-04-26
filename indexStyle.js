function activeNavElement(element){
    let parentNode = element.parentNode;
    let childNodes = element.parentNode.children;
    //removing nav-link class
    for(let i=0; i < childNodes.length; i++){
        childNodes[i].classList.remove('nav_target');
    }
    //add class to clicked element
    element.classList.add("nav_target");
 
}
