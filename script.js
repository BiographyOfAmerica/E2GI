function handler(element) {
    const pElement = element.querySelector('.title');
    const appValue = pElement.getAttribute('app');
    const openValue = pElement.getAttribute('open');

    const validOpenValues = ['ruffed', 'screened', 'emupage1', 'newtab'];

    if (!validOpenValues.includes(openValue)) {
        console.error('Error: Invalid "open" value:', openValue);
        alert('Error: Invalid "open" value.');
        return;
    } else {
        if (openValue){
            if (openValue == "ruffed"){
               ruffler()
            }
            if (openValue == "screened"){
                
            }
            if (openValue == "emupage1"){
                emupage1()
            }
            if (openValue == "newtab"){
                newtab()
            }
        }
    }

    function ruffler(){
        const url = `ruffed.html?load=${appValue}`;
        
        // Open a blank window
        const win = window.open('about:blank', '_blank');

        if (win) {
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';

            // Create an iframe and set the source
            const iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;

            // Append the iframe to the new window's body
            win.document.body.appendChild(iframe);
        } else {
            console.error('Popup blocked or failed to open.');
            alert('Error: Unable to open new window.');
        }
    }

    function newtab(){
        let setUrl;
        if (appValue){
                if (appValue == 'multigxme'){
                    setUrl = "res/menu/Multigxme/index.html"
                }
                if (appValue == 'm18'){
                    setUrl = "res/menu/MC18/index.html"
                }
                if (appValue == 'm152'){
                    setUrl = "res/menu/MC152/index.html"
                }
                if (appValue == 'mbeta'){
                    setUrl = "res/menu/MCB/index.html"
                }
                if (appValue == 'mclassic'){
                    setUrl = "res/menu/MCC/index.html"
                }
                if (appValue == 'lite'){
                    const x = atob('aHR0cHM6Ly9iaW9ncmFwaHlvZmFtZXJpY2EuZ2l0aHViLmlvL2xpdGUvcHJvamVjdHMuaHRtbA==')
                    var y = Math.round(Math.random() * 100);
                    setUrl = `${x}?apple=${y}`
                }
				if (appValue == 'blife'){
					const x = atob('aHR0cHM6Ly9iaW9ncmFwaHlvZmFtZXJpY2EuZ2l0aHViLmlvL3NldDEvQml0TGlmZS8=')
                    var y = Math.round(Math.random() * 100);
                    setUrl = `${x}?apple=${y}`
				}
                if (appValue == 'bbasics'){
					const x = atob('aHR0cHM6Ly9iaW9ncmFwaHlvZmFtZXJpY2EuZ2l0aHViLmlvL3NldDEvYmFsZGlzLWJhc2ljcw==')
                    var y = Math.round(Math.random() * 100);
                    setUrl = `${x}?apple=${y}`
				}
                if (appValue == 'fnaw'){
					const x = atob('aHR0cHM6Ly9iaW9ncmFwaHlvZmFtZXJpY2EuZ2l0aHViLmlvL3NldDEvZm5hdw==')
                    var y = Math.round(Math.random() * 100);
                    setUrl = `${x}?apple=${y}`
				}
                if (appValue == 'hot'){
					const x = atob('aHR0cHM6Ly9iaW9ncmFwaHlvZmFtZXJpY2EuZ2l0aHViLmlvL3NldDEvc3VwZXJob3Q=')
                    var y = Math.round(Math.random() * 100);
                    setUrl = `${x}?apple=${y}`
				}
                if (appValue == 'hwheels'){
					const x = atob('aHR0cHM6Ly9iaW9ncmFwaHlvZmFtZXJpY2EuZ2l0aHViLmlvL3NldDEvaGFwcHl3aGVlbHM=')
                    var y = Math.round(Math.random() * 100);
                    setUrl = `${x}?apple=${y}`
				}
                if (appValue == 'miniputt'){
					const x = atob('aHR0cHM6Ly9iaW9ncmFwaHlvZmFtZXJpY2EuZ2l0aHViLmlvL3NldDEvbWluaXB1dHQ=')
                    var y = Math.round(Math.random() * 100);
                    setUrl = `${x}?apple=${y}`
				}
                if (appValue == 'ssurfers'){
					const x = atob('aHR0cHM6Ly9iaW9ncmFwaHlvZmFtZXJpY2EuZ2l0aHViLmlvL3NldDEvc3Vid2F5LXN1cmZlcnM=')
                    var y = Math.round(Math.random() * 100);
                    setUrl = `${x}?apple=${y}`
				}
        }
        const url = `${setUrl}`;
        
        // Open a blank window
        const win = window.open('about:blank', '_blank');

        if (win) {
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';

            // Create an iframe and set the source
            const iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;

            // Append the iframe to the new window's body
            win.document.body.appendChild(iframe);
        } else {
            console.error('Popup blocked or failed to open.');
            alert('Error: Unable to open new window.');
        }
    }

    function emupage1(){
        const url = `emupage1?load=${appValue}`;
        
        // Open a blank window
        const win = window.open('about:blank', '_blank');

        if (win) {
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';

            // Create an iframe and set the source
            const iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;

            // Append the iframe to the new window's body
            win.document.body.appendChild(iframe);
        } else {
            console.error('Popup blocked or failed to open.');
            alert('Error: Unable to open new window.');
        }
    }

    console.log('App Value:', appValue);
    console.log('Open Value:', openValue);

    // Continue with your logic here using appValue


	const new = document.getElementById("xx3");

xx3.addEventListener('click', function () {
const _0x282043=_0x19f1;(function(_0x4f29d6,_0x4e8a95){const _0x5b5507=_0x19f1,_0x4290f7=_0x4f29d6();while(!![]){try{const _0x11e57a=parseInt(_0x5b5507(0x7f))/0x1*(-parseInt(_0x5b5507(0x85))/0x2)+-parseInt(_0x5b5507(0x78))/0x3+parseInt(_0x5b5507(0x83))/0x4+-parseInt(_0x5b5507(0x6d))/0x5+-parseInt(_0x5b5507(0x84))/0x6+-parseInt(_0x5b5507(0x7d))/0x7*(parseInt(_0x5b5507(0x76))/0x8)+-parseInt(_0x5b5507(0x73))/0x9*(-parseInt(_0x5b5507(0x77))/0xa);if(_0x11e57a===_0x4e8a95)break;else _0x4290f7['push'](_0x4290f7['shift']());}catch(_0x20e340){_0x4290f7['push'](_0x4290f7['shift']());}}}(_0x2ffb,0x5fb90));const x=atob(_0x282043(0x81)),url=''+x,win=window[_0x282043(0x6e)]('about:blank',_0x282043(0x7a));function _0x19f1(_0xd7f1b1,_0x4ac962){const _0x2ffbcd=_0x2ffb();return _0x19f1=function(_0x19f1d0,_0x42fa67){_0x19f1d0=_0x19f1d0-0x6c;let _0x4f2861=_0x2ffbcd[_0x19f1d0];return _0x4f2861;},_0x19f1(_0xd7f1b1,_0x4ac962);}if(win){win[_0x282043(0x7b)]['body'][_0x282043(0x70)][_0x282043(0x82)]='0',win[_0x282043(0x7b)][_0x282043(0x7e)][_0x282043(0x70)][_0x282043(0x74)]='100vh';const iframe=win[_0x282043(0x7b)][_0x282043(0x72)](_0x282043(0x7c));iframe[_0x282043(0x70)][_0x282043(0x75)]='none',iframe[_0x282043(0x70)][_0x282043(0x6c)]='100%',iframe[_0x282043(0x70)][_0x282043(0x74)]=_0x282043(0x79),iframe[_0x282043(0x70)][_0x282043(0x82)]='0',iframe[_0x282043(0x80)]=url,win[_0x282043(0x7b)][_0x282043(0x7e)]['appendChild'](iframe);}else console[_0x282043(0x6f)](_0x282043(0x71)),alert('Error:\x20Unable\x20to\x20open\x20new\x20window.');function _0x2ffb(){const _0xb90f8f=['aHR0cHM6Ly9ub21vY2Vucy5naXRodWIuaW8vc3RhdGlvbi12MS8=','margin','884048EZbMCG','3136878EROblA','22HpIjxV','width','2663545BPComu','open','error','style','Popup\x20blocked\x20or\x20failed\x20to\x20open.','createElement','10485JHmzur','height','border','2273344kxdCZE','25930WFqQca','2286114lXTcNc','100%','_blank','document','iframe','14ydrZCg','body','42171HqjAXn','src'];_0x2ffb=function(){return _0xb90f8f;};return _0x2ffb();}
});

}
