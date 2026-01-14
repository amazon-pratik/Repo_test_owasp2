import { editor, languages, Range } from "monaco-editor";

// {fact rule=cross-site-scripting@v1.0 defects=1}
function test1 (userInput) {
  languages.registerHoverProvider('mySpecialLanguage', {
    provideHover: function (model) {
      return {
        range: new Range(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount())),
        contents: [
          // ruleid:monaco-hover-htmlsupport
          {
            value: `<a href="${userInput}">Hello</a>`,
            supportHtml: true,
            isTrusted: true
          },
        ]
      }
    }
  });
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
function okTest1 () {
  languages.registerHoverProvider('mySpecialLanguage', {
    provideHover: function (model) {
      return {
        range: new Range(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount())),
        contents: [
          {
            value: `<a href="//google.com">Hello</a>`,
            supportHtml: true,
            isTrusted: true
          },
        ]
      }
    }
  });
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
function okTest2 (userInput) {
  languages.registerHoverProvider('mySpecialLanguage', {
    provideHover: function (model) {
      return {
        range: new Range(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount())),
        contents: [
          {
            value: `** Hello ${userInput}`,
          },
        ]
      }
    }
  });
}
// {/fact}
