var reveal = document.querySelectorAll('div.reveal');

for(var i = 0; i < reveal.length; i++){
    const ratio = .2;

    const reveal_all = reveal[i];

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }
    
    const handleIntersect = function(entries, observer){
        entries.forEach(function(entry){
            if(entry.intersectionRatio > ratio){
                console.log('Element visible');
                entry.target.classList.add('reveal-visible');
                entry.target.classList.remove('reveal');
                observer.unobserve(entry.target);
                
            }
        })
    }
    
    
    
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(reveal_all);
}



