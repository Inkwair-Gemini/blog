var posts=["2023/05/16/hello-world/","2023/05/17/test/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"Spring","link":"https://hexo.io/zh-tw/","avatar":"https://img01.anzhiy.cn/useruploads/172/2023/05/18/6466023fecefe.jpg","descr":"Spring家族框架"},{"name":"anzhiyu主题","link":"https://anzhiy.cn/","avatar":"https://img01.anzhiy.cn/useruploads/90/2023/04/23/6444e85234e51.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"!w120","link":"https://anzhiy.cn/","avatar":"https://img01.anzhiy.cn/useruploads/90/2023/04/23/6444e85234e51.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"安知鱼","hundredSuffix":"!w120","link":"https://anzhiy.cn/","avatar":"https://img01.anzhiy.cn/useruploads/90/2023/04/23/6444e85234e51.jpg","descr":"生活明朗，万物可爱"},{"name":"zzmr","hundredSuffix":"!w120","link":"https://jimmy66886.github.io/","avatar":"https://s2.loli.net/2022/09/02/6rUxGoewvp5hNlB.jpg","descr":"生活随想曲"},{"name":"程序袁","hundredSuffix":"!w120","link":"https://hardenthebest.github.io/","avatar":"https://hardenthebest.github.io/assets/1.jpg","descr":"我的煞笔室友"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };