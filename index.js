function validatePassword() {
    var password = document.forms["loginForm"]["password"].value

    if (password == "123abc") {
        window.location.href = "form.html"
        return true
    } else {
        alert("Неверный пароль")
        return false
    }
}

function validateForm() {
    var url = document.forms["fruitForm"]["url"].value
    var name = document.forms["fruitForm"]["name"].value
    var description = document.forms["fruitForm"]["description"].value
    var treeName = document.forms["fruitForm"]["treeName"].value
    var hasSeed = document.forms["fruitForm"]["hasSeed"].checked
    var unit = document.forms["fruitForm"]["unit"].value
    var weightRange = document.forms["fruitForm"]["weightRange"].value
    var cost = document.forms["fruitForm"]["cost"].value
    var seasonality = document.forms["fruitForm"]["seasonality"].value

    if (url == "" || name == "" || description == ""
        || treeName == "" || unit == "" || weightRange == ""
        || cost == "" || seasonality == "") {
        alert("Все поля должны быть заполнены")
        return false
    }

    var urlPattern = new RegExp('^(https?:\\/\\/)?([\\da-z.-]+)\\.([a-z.]{2,6})', 'i')
    if (!urlPattern.test(url)) {
        alert("URL должен содержать домен первого и второго уровня, например: example.com");
        return false
    }

    localStorage.setItem("url", url)
    localStorage.setItem("name", name)
    localStorage.setItem("description", description)
    localStorage.setItem("treeName", treeName)
    localStorage.setItem("hasSeed", hasSeed ? "Да" : "Нет")
    localStorage.setItem("unit", unit)
    localStorage.setItem("weightRange", weightRange)
    localStorage.setItem("cost", cost)
    localStorage.setItem("seasonality", seasonality)

    window.location.href = "result.html"

    return false
}

window.onload = function() {
    var result = document.getElementById("result")
    if (result) {
        result.innerHTML = "URL поставщика: " + localStorage.getItem("url") +
            "<br>Название: " + localStorage.getItem("name") +
            "<br>Описание: " + localStorage.getItem("description") +
            "<br>Название дерева: " + localStorage.getItem("treeName") +
            "<br>Наличие косточки: " + localStorage.getItem("hasSeed") +
            "<br>Единицы измерения: " + localStorage.getItem("unit") +
            "<br>Диапазон веса: " + localStorage.getItem("weightRange") +
            "<br>Примерная стоимость: " + localStorage.getItem("cost") +
            "<br>Сезонность: " + localStorage.getItem("seasonality")
    }
}
