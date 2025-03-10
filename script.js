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
}
