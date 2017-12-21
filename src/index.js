const visit = require(`unist-util-visit`)
const breaks = require(`remark-breaks`)


module.exports = ({ markdownAST }) => {
  visit(markdownAST, `break`, node => {
    node.type = `html`
    node.value = `<br>`
  })
}

module.exports.setParserPlugins = () => [breaks]
