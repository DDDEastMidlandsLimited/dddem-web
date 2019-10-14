// styles/ContentSection.js
import css from 'styled-jsx/css'
import theme from "../theme/theme"

export default css.contentsection`
    section {
        max-width: ${theme.sizes.maxContentWidth};
        padding: ${theme.sizes.contentPadding};
        margin: auto;
    }
    section div{
        padding-bottom: 10px;
    }

    .green{
        color: green;
    }

    .yellow{
        color: orange;
    }

    .red{
        color: red;
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        text-align: center;
    }

    tr th {
        background-color: #dddddd;
    }
`