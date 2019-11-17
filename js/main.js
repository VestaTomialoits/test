let lengthButton = document.getElementsByClassName('form-container__length-button')[0],
    lineButton = document.getElementsByClassName('form-container__line-button')[0],
    dataContainer = document.getElementsByClassName('info-container')[0],
    input = document.getElementById('input'),
    checkbox = document.getElementById('checkbox');

let req = (url) => fetch('https://cors-anywhere.herokuapp.com/' + url)
    .then(data => data.json())
    .then(data => {
        let dataArray = data.data;

        lengthButton.addEventListener('click', getLengthData, false);

        function getLengthData(ev) {
            ev.preventDefault();
            dataContainer.innerHTML = '';
            dataArray.filter(item => {
                if (item.length > input.value) {
                    dataContainer.innerHTML += `<div>${item}</div>`;
                }
            });
        }

        lineButton.addEventListener('click', getLineData, false);

        function getLineData(ev) {
            ev.preventDefault();
            dataContainer.innerHTML = '';
            if (checkbox.checked) {
                dataArray.filter(item => {
                    if (item.includes(input.value)) {
                        dataContainer.innerHTML += `<div>${item}</div>`;
                    }
                });
            } else {
                dataArray.filter(item => {
                    if (item.toLowerCase().includes(input.value) || item.includes(input.value) || item.includes(input.value.toLowerCase())) {
                        dataContainer.innerHTML += `<div>${item}</div>`;
                    }
                });
            }
        }
    });

let url = 'http://www.mrsoft.by/data.json';

req(url);





