document.title = document.getElementsByTagName('h1').length < 1
    ? '王东_4年PHP开发_简历'
    : document.getElementsByTagName('h1')[0].innerText.replace(/[\s!"#\$%&'()*+,-.\/:;<=>?@\[\\\]\^`{|}~]+/g, '_');
