// Q4. Form Builder

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    buildForm() {
        document.body.innerHTML = "<h2>Dynamic Form</h2>";

        this.fields.forEach(field => {
            document.body.innerHTML += `
                <label>${field}</label>
                <input id="${field}" placeholder="${field}"><br><br>
            `;
        });

        document.body.innerHTML +=
            '<button id="submit">Submit</button><pre id="result"></pre>';

        document.getElementById("submit").onclick = () => {
            document.getElementById("result").innerText =
                JSON.stringify(this.getFormData(), null, 2);
        };
    }

    getFormData() {
        let data = {};

        this.fields.forEach(field => {
            data[field] = document.getElementById(field).value;
        });

        return data;
    }
}

let form = new FormBuilder(["name", "email", "city"]);
form.buildForm();
