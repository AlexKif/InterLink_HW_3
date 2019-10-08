let getStatistics = () => {
    const GetTextAreaValue = document.getElementsByTagName("textarea")[0].value;
    const contentClass = document.getElementsByClassName("content")[0];
    let words = GetTextAreaValue.split(" ");
    let result = {};
    let output = '';

    for (let i = 0; i < words.length; ++i) {
        let a = words[i];
        if (result[a] !== undefined) {
            ++result[a];
        }
        else
            result[a] = 1;
    }

    for (let key in result) {
        output += `Слово ${key} зустрічалось ${result[key]} раз(а). `;
    }

    contentClass.innerHTML = output;

};

