class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build(){
        //Criação da div principal do card e atribuido o atributo classe com o nome de card
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        //Criação da div que ficará na parte esquerda do card e atribuido o atributo classe com o nome de card-left
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card-left");

        //Criação dos elementos que estarão dentro do card-left
        const author = document.createElement("span");
        const link = document.createElement("a");
        const newsContent = document.createElement("p");

        //Atribuindo as propriedades aos elementos do card-left
        author.textContent = "By " + (this.getAttribute("newsAuthor") || "Anonymous");
        link.textContent = this.getAttribute("newsTitle")
        link.href = this.getAttribute("newsLink")
        newsContent.textContent = this.getAttribute("newsContent")

        //Atribuindo os elementos como filhos do card-left
        cardLeft.appendChild(author);
        cardLeft.appendChild(link);
        cardLeft.appendChild(newsContent);

        //Criação da div que ficará na parte direita do card e atribuido o atributo classe com o nome de card-right
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        //Criação dos elementos que estarão dentro do card-right
        const newsImage = document.createElement("img");

        //Atribuindo as propriedades aos elementos do card-right
        newsImage.src = this.getAttribute("newsImage") || "src/images/default.jpg"
        newsImage.alt = this.getAttribute("newsImageAlt")

        //Atribuindo os elementos como filhos do card-right
        cardRight.appendChild(newsImage)

        //Atribuino os elementos cardLeft e cardLeft comoo filho do componentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }

    styles(){
        const style = document.createElement("style");

        style.textContent = `
            .card{
                width: 80%;
                border-radius: 20px;
                padding: 30px;
                background-color: #001d36;
                -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
                display: grid;
                gap: 10px;
                grid-template-columns: 3fr 1fr;
            }
            
            .card-left{
                display: flex;
                flex-direction: column;
                gap: 5px;
                color: white;
            }
            
            .card-left span{
                font-weight: 400;
                font-style: italic;
            }
            
            .card-left a{
                font-size: 3rem;
                font-weight: 600;
                align-self: center;
                color: rgb(207, 187, 1);
            }
            
            .card-left p{
                font-weight: 300;
            }
            
            .card-right img{
                width: 230px;
                height: 230px;
                border-radius: 15px;
            }
        `

        return style
    }
}

customElements.define('card-news', CardNews)