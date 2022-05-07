import Mock from 'mockjs'

function getArticleInfo() {
    const articles = Mock.mock({
        "articleInfo|10": [{    //生成|num个如下格式名字的数据

            "id|+1": 1,  //数字从当前数开始后续依次加一

            "title": '@ctitle(6, 20)',

            "body": '@cparagraph(1, 3)',

            "author": "@cname",    //名字为随机中文名字

            "image": "@image('200x100', '#FF9900')",

            "createtime": '@datetime',

            "category|1": ["前端", "后端", "工具", "语言", "教程", "软件"],

            "tag|1-3": { '01': 'vue', '02': 'bootstrap', '03': 'html', '04': 'css', '05': 'javascript', '06': 'mockjs', '07': 'vuex', '08': 'router', '09': 'axios' }

        }]
    });
    return articles;
}
Mock.mock('/articles/info', 'get', getArticleInfo)