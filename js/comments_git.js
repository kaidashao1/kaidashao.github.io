if($('#gitalk-container').length>0){
    var gitalk = new Gitalk({
      // gitalk的主要参数
  clientID: `e7fb44e293c01b2b77c9`,
  clientSecret: `af03cdb5679fb911969f12736cf68d06c2427b92`,
  repo: `kaidashao1.github.io`,//存储你评论 issue 的 Github 仓库名（建议直接用 GitHub Page 的仓库名）
  owner: 'kaidashao1',
  admin: ['kaidashao1'], //这个仓库的管理员，可以有多个，用数组表示，一般写自己,
  id: 'window.location.pathname', //页面的唯一标识，gitalk 会根据这个标识自动创建的issue的标签,我们使用页面的相对路径作为标识
    });
    gitalk.render('gitalk-container');
  }