webpackJsonp([100,204],{

/***/ 1737:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["h2", "常见导航"], ["table", {
	    "style": "font-size: 12px; float: right; width: 600px; margin-left: 60px; margin-bottom: 100px;"
	  }, ["tbody", ["tr", ["th"], ["th", "侧栏导航"], ["th", "顶部导航"]], ["tr", ["th", "优点"], ["td", "导航的层级扩展性强；水平空间利用率高，可展示更多内容；导航可以固定，使得用户在操作和浏览时可以快速定位和切换当前位置，非常高效。"], ["td", "人的浏览习惯是自上而下的，便于浏览和点击；通常将内容放在固定尺寸（例如：1208px）内，整个页面排版稳定，不受用户终端显示器影响。"]], ["tr", ["th", "缺点"], ["td", "内容区域一般放置在栅格上，所以排版受用户终端显示器影响大。"], ["td", "目前显示器多为宽屏，顶部导航对垂直空间占用率大，而对水平空间利用率低；由于中英文都是横向书写，顶部导航会限制导航类目的数量和长度。"]], ["tr", ["th", "总结"], ["td", "适用在操作性强、中后台管理性质的应用。"], ["td", "一般适用在浏览性强、门户性质的网站，以及一些比较前台化的应用。"]]]], ["p", "我们将常见的导航模式分为：侧栏导航和顶部导航，两者各有优缺点，设计者可以根据各自的业务需求进行选择。"], ["p", "前端实现代码可以参考 ", ["a", {
	    "title": null,
	    "href": "/docs/spec/layout#docs-spec-layout-demo-top"
	  }, "常用布局"], "。"], ["h2", "侧栏导航"], ["hr"], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "结构示例",
	    "src": "https://os.alipayobjects.com/rmsportal/hutiGZWQYmIspjw.png"
	  }]], ["p", "导航的结构由以下几部分组成。"], ["ol", ["li", ["p", "产品 Logo 和名称"]], ["li", ["p", "业务类目"]], ["li", ["p", "登陆工具"]], ["li", ["p", "面包屑（可选）"]]], ["h4", "关于面包屑"], ["blockquote", ["ol", ["li", ["p", "尽可能不使用面包屑，尤其是当前页面的导航能清晰的告诉用户他在哪里时。"]], ["li", ["p", "面包屑可以分为这几类："], ["ul", ["li", ["p", "路径型：是一个动态显示用户到达页面经过的途径。"]], ["li", ["p", "位置型：位置型是固定的，显示了页面在网站结构中的位置。"]], ["li", ["p", "属性型：属性型给出当前页面的分类信息。"]]]]]], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "一级类目",
	    "src": "https://os.alipayobjects.com/rmsportal/IeuIHdFfKCIABHV.png"
	  }]], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "二级类目",
	    "src": "https://os.alipayobjects.com/rmsportal/kAbbeJekohMtubV.png"
	  }]], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "三级类目及以上",
	    "src": "https://os.alipayobjects.com/rmsportal/qaOifucSTWooBTL.png"
	  }]], ["p", "我们定义了不同类目层级所对应的导航样式。"], ["h2", "顶部导航"], ["hr"], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "结构示例",
	    "src": "https://os.alipayobjects.com/rmsportal/MVccMQxgCeYfwjS.png"
	  }]], ["p", "导航的结构由以下几部分组成。"], ["ol", ["li", ["p", "产品 Logo 和名称"]], ["li", ["p", "业务类目"]], ["li", ["p", "登陆工具"]], ["li", ["p", "面包屑（可选）"]]], ["p", ["br"]], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "一级类目",
	    "src": "https://os.alipayobjects.com/rmsportal/KvEsIDOYzknbsPT.png"
	  }]], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "二级类目",
	    "src": "https://os.alipayobjects.com/rmsportal/xXaCRVPIfmjDyIL.png"
	  }]], ["p", ["img", {
	    "class": "preview-img no-padding",
	    "align": "right",
	    "alt": "三级类目及以上",
	    "src": "https://os.alipayobjects.com/rmsportal/ollkHeFUFQElelm.png"
	  }]], ["p", "不同类目层级。"]],
	  "meta": {
	    "order": 1,
	    "title": {
	      "zh-CN": "导航",
	      "en-US": "Navigation"
	    },
	    "filename": "docs/pattern/navigation.md"
	  },
	  "description": ["section", ["p", "在广义上，任何告知用户他在哪里，他能去什么地方以及如何到达那里的方式，都可以称之为导航。而我们将中后台常见的导航方式进行提炼和封装，帮助设计者快速构建清晰和流畅的系统。当设计者使用导航或者自定义一些导航结构时，请注意："], ["ol", ["li", ["p", "尽可能提供标示、上下文线索以及网站地图，避免用户迷路；"]], ["li", ["p", "保持导航样式和行为一致或者减少导航数量，降低用户学习成本；"]], ["li", ["p", "尽可能减少页面间的跳转（eg：一个常见任务需要多个页面跳转时，请减少至一至两次），让用户移动距离保持简短。"]]]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#常见导航"
	  }, "常见导航"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#侧栏导航"
	  }, "侧栏导航"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#顶部导航"
	  }, "顶部导航"]]]
	};

/***/ }

});