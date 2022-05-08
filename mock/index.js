import Mock from 'mockjs'

const fakeInfo = Mock.mock({
    "articleInfo|10": [{    //生成|10个如下格式的数据

        "id|+1": 1,  //数字从当前数开始后续依次加一

        "title": '@ctitle(6, 20)',

        "body|3": ['@cparagraph(10,20)'],

        "author": "@cname",

        "image": "@image('200x100', '#00CC99')",

        "createtime": '@datetime',

        "category|1": ["前端", "后端", "工具", "语言", "教程", "软件"],

        "tag|1-3": { '01': 'vue', '02': 'bootstrap', '03': 'html', '04': 'css', '05': 'javascript', '06': 'mockjs', '07': 'vuex', '08': 'router', '09': 'axios' }

    }]
});

Mock.mock('/articles/info', 'get', fakeInfo)