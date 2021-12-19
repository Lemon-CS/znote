(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{483:function(v,_,p){"use strict";p.r(_);var t=p(2),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("Boxx"),v._v(" "),p("p",[v._v("今天给大家分享一下关于架构和中台的一些东西。")]),v._v(" "),p("p",[v._v("主要会介绍一下中台的来源，这个大家可能都比较清楚，网上的文章和视频啊一大堆。")]),v._v(" "),p("p",[v._v("还有就是关于架构的发展过程不得不在中间说明一下，由此引申出来中台的诞生。")]),v._v(" "),p("p",[v._v("最后会就关于交易中台和金融中台做一个介绍，因为我最近两年在其他公司做的一个是交易中台，还有一个就是金融中台相关的业务。")]),v._v(" "),p("blockquote",[p("p",[v._v("公司内做的一个简单的分享，文章内容是我根据自己讲的还有录像又手撸了一遍，累。")])]),v._v(" "),p("h2",{attrs:{id:"中台由来"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#中台由来"}},[v._v("#")]),v._v(" 中台由来")]),v._v(" "),p("p",[v._v("首先，来看一下中台的由来。")]),v._v(" "),p("p",[v._v("中台的来源主要是阿里，他们在15年拜访在芬兰的一家游戏公司，也就是SuperCell。")]),v._v(" "),p("p",[v._v("这家公司非常牛逼，号称是世界上最成功的的移动游戏公司，做出的游戏也非常有名，肯定很多人也玩过。")]),v._v(" "),p("p",[v._v("比如部落战争、海岛奇兵等等。")]),v._v(" "),p("p",[v._v("我也玩过一下他们的那个游戏，不过觉得没啥意思。")]),v._v(" "),p("p",[v._v("这家公司的规模只有不到200人，公司的开发模式通常都会由2-7个人的小团队进行开发，这个在他们内部叫做cell，这也是他们公司名字的由来。")]),v._v(" "),p("p",[v._v("开发过程通常是团队内部决定，然后用最快的时间开发出测试版本，如果受欢迎就继续干，否则的话就迅速放弃。")]),v._v(" "),p("p",[v._v("产品失败之后，不光不会受到惩罚，他们还会搞个party来庆祝，庆祝自己学到了新的东西。")]),v._v(" "),p("p",[v._v("不过我觉得挺奇葩的，要是都按照他们这个模式来，早期腾讯、阿里这些大公司都该死绝了。")]),v._v(" "),p("p",[v._v("我们都知道，腾讯早期的时候想卖100万都没人要，马总实在没辙才只能硬着头皮继续做下去。")]),v._v(" "),p("p",[v._v("但是，就是这样一家小公司，2015年的净利润达到了15亿美元，而且在2016年的时候被腾讯86亿美元收购。")]),v._v(" "),p("p",[v._v("这些都不是重点哈，重点我们今天要讲的是他们的开发模式，为什么能快速开发一个新游戏出来？")]),v._v(" "),p("p",[v._v("本来在我们想象中，开发一个新的游戏是一个很耗费时间精力的东西，几周开发一个还不错的游戏应该是很有难度的事情。")]),v._v(" "),p("p",[v._v("重点就在于他们的”中台“，也是他们多年游戏沉淀下来的东西。")]),v._v(" "),p("p",[v._v("他们在前面的很多年时间里对通用的游戏素材、算法等等做了很多沉淀。")]),v._v(" "),p("p",[v._v("这也就是后面马云回来阿里之后大力搞的中台了。")]),v._v(" "),p("h2",{attrs:{id:"聊聊架构"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#聊聊架构"}},[v._v("#")]),v._v(" 聊聊架构")]),v._v(" "),p("p",[v._v("讲完中台的来历，在将中台之前，我们还是要先说说架构的发展过程。")]),v._v(" "),p("h2",{attrs:{id:"单体架构的时代"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#单体架构的时代"}},[v._v("#")]),v._v(" 单体架构的时代")]),v._v(" "),p("p",[v._v("在我刚刚上班的时候，大概是11年、12年基本上我接触到的项目都是这个样子。")]),v._v(" "),p("p",[v._v("一个团队的所有东西都在一块，什么用户注册登录、支付啊、订单都在一起，经常是改一个小东西一个大项目都要跟着发布。")]),v._v(" "),p("p",[v._v("一般单体的架构都是"),p("strong",[v._v("单进程")]),v._v("的，这也是针对我们现在的微服务来说的，就是打个jar包或者war包上传就完事儿了，所有模块都在一个进程里，如果要升级或者重启，那整个应用服务都要重启。")]),v._v(" "),p("p",[v._v("当然了，简单的项目划分模块分层还是有的，比如我们那时候常用的MVC模式。")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/418e8dadbfa040529ab78b12aab8ac63~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("p",[v._v("简单是很简单，但是同样缺点也是很明显的。")]),v._v(" "),p("p",[v._v("第一点就是团队协同合作的成本高，如果说小公司没几个人还好，一旦业务快速发展起来，代码量感人，刚开始上班那会儿我的电脑经常就只能跑的动一个项目，不过好像也没有别的项目了。")]),v._v(" "),p("p",[v._v("经常改一个简单的东西可能到处是冲突，更不要说一个大服务的发版问题。")]),v._v(" "),p("p",[v._v("第二点，项目太复杂了，什么东西都是大杂烩，全在里面。")]),v._v(" "),p("p",[v._v("第三点，数据库连接的问题，一个服务太大了，就一个数据库的集群，业务越来越多，服务器越来越多，到后面单机可能只搞个个位数的连接都要不够用了。")]),v._v(" "),p("p",[v._v("所以，一般伴随拆分服务，数据库也会做拆分，独立的服务拥有独立的数据库。")]),v._v(" "),p("p",[v._v("最后一点，拓展性的问题，所有的功能都在一个服务里，可能实际情况是某几个功能模块负载非常高，比如订单或者库存的服务，频繁的读写，这时候想要扩展很难搞。")]),v._v(" "),p("p",[v._v("更严重的问题就是，如果一个模块出了问题，整个应用都不能用了。")]),v._v(" "),p("p",[v._v("这时候没有办法了，只能拆分。")]),v._v(" "),p("p",[v._v("因此就到了我们第二个架构模式，SOA的时代。")]),v._v(" "),p("h2",{attrs:{id:"soa-service-oriented-architecture"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#soa-service-oriented-architecture"}},[v._v("#")]),v._v(" SOA(Service-Oriented Architecture)")]),v._v(" "),p("p",[v._v("我在饿了么工作那会儿，里面就有一大堆的SOA的称呼，并且一直都是。")]),v._v(" "),p("p",[v._v("SOA是什么意思呢，全名是这个"),p("strong",[v._v("Service-Oriented")]),v._v(" "),p("strong",[v._v("Architecture")]),v._v("，意思就是面向服务的架构，基本上和我们现在的微服务差不多一样。")]),v._v(" "),p("p",[v._v("SOA的核心在于："),p("strong",[v._v("松耦合和服务重用")]),v._v("，当单体架构出现瓶颈的时候，首先想到的都是拆，SOA时代的话，其实也已经就有了服务注册发现、服务治理这些概念了，和微服务可以说从认知上没有任何区别。")]),v._v(" "),p("p",[v._v("SOA其实有两种模式，一种是中心化，一种是去中心化，下图中表示的就是中心化的服务调用方式。")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a7d631c14b849c3b161c4e934f5796a~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("p",[v._v("服务调用之间都通过ESB服务总线，调用方之间屏蔽了接口的修改，ESB要做服务请求路由、数据格式转换，各种HTTP SOCKET适配和接入，所有脏活累活都归他干了。")]),v._v(" "),p("p",[v._v("这样很明显的看出来问题了。")]),v._v(" "),p("p",[v._v("第一个就是请求，同样的请求次数是通常去中心化的2倍，本来A调用B，现在要通过ESB。")]),v._v(" "),p("p",[v._v("第二个是肉眼可见的问题，这个ESB的压力会非常大，可以通过集群解决，但是ESB的性能瓶颈会导致所有服务的瓶颈。")]),v._v(" "),p("p",[v._v("但是，这个模式在当初非常受欢迎，主要原因是什么呢？")]),v._v(" "),p("p",[v._v("就是"),p("strong",[v._v("烟囱式架构")]),v._v("引发出来的问题。")]),v._v(" "),p("p",[v._v("烟囱式架构是什么？")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/434a99d9f02a411d943eb7309a723afb~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("p",[v._v("就像这张图描述的，你有好几个业务，因为时间或者说团队、公司各种原因，搞成了好几套独立的服务，开发和运维都没啥关系，大多数公司之前的发展过程中都会存在这样的问题。")]),v._v(" "),p("p",[v._v("比如我之前的公司先做酒店业务、然后又有外卖、还有餐饮店、还要卖咖啡。")]),v._v(" "),p("p",[v._v("如果说来一个业务就重头搞一套用户体系、订单体系、库存体系，最终的结果就是像矗立起来的一个个烟囱，也就是烟囱式架构。")]),v._v(" "),p("p",[v._v("烟囱的现象很普遍，大家各玩各的，先把业务跑起来再说，但是缺陷有很多。")]),v._v(" "),p("p",[v._v("首先，"),p("strong",[v._v("重复建设开发")]),v._v("，不用说都能看出来，每次重头搞一套，不说开发成本，就说服务器和运维成本都够头疼的。")]),v._v(" "),p("p",[v._v("第二点，就是系统之间交互协作成本直线上升，业务发展了，可能要做一些精确营销活动，设计用户画像，对数据分析之类的啦，这都很正常。")]),v._v(" "),p("p",[v._v("哦豁，这时候你发现用户在好几个系统里，这个交互打通的成本就太高了。")]),v._v(" "),p("p",[v._v("要做个数据统计，还要调好几个系统接口，可能数据结构还不一样，搞都搞死你。")]),v._v(" "),p("p",[v._v("还有就是业务沉淀和发展，这也是后面要说的中台了。")]),v._v(" "),p("p",[v._v("难道这些系统之间就没有通用的能抽象的能力可以共用吗？")]),v._v(" "),p("p",[v._v("这也就是中台的发展的方向，抽象、沉淀和共用。")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/59aa130f93bf415bb6205e6f7aad79b2~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("h2",{attrs:{id:"微服务架构"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[v._v("#")]),v._v(" 微服务架构")]),v._v(" "),p("p",[v._v("最后就是说到我们的微服务时代了，这个大家都很熟悉，不需要说太多东西。")]),v._v(" "),p("p",[v._v("至于现在还有Serverless、云原生什么低代码这里就不展开了，等后面的话有机会再说。")]),v._v(" "),p("p",[v._v("回到微服务的话题，微服务和SOA有什么区别。")]),v._v(" "),p("p",[v._v("个人认为其实很接近，微服务就是更加自由和更细粒度的SOA。")]),v._v(" "),p("p",[v._v("微服务没有那么多框架约束，我们想用啥用啥，虽然在SOA也可以实现，比如通信我们可以用Dubbo，可以用Feign，Thrift，GRPC，想用啥用啥。")]),v._v(" "),p("p",[v._v("举个例子用 spring cloud 来说，eureka可以帮我们做服务注册和发现，打个@enableEurekaClient就可以成为客户端连接到Eureka了。")]),v._v(" "),p("p",[v._v("路由直接用zuul，限流熔断用hystrix，负载均衡用ribbon，远程调用用feign。")]),v._v(" "),p("p",[v._v("非常方便，当然还可以选择用Spring Cloud Alibaba，这个我认为可能会是将来一段时间的趋势，更新维护的非常勤快。")]),v._v(" "),p("p",[v._v("Dubbo Nacos Sentinel这一套整起来明显更符合国内的使用习惯。")]),v._v(" "),p("h2",{attrs:{id:"服务共享"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#服务共享"}},[v._v("#")]),v._v(" 服务共享")]),v._v(" "),p("p",[v._v("说完架构的发展，可以回到我们之前的中台话题。")]),v._v(" "),p("p",[v._v("那其实中台的作用已经不言而喻了，就是共享。")]),v._v(" "),p("p",[v._v("以现在比较主流的一些电商来说，几个共享服务中心的划分。")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2364c79494f94039b002f5edc9084115~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("p",[v._v("首先用户中心必不可少，用户是基础服务，用户中心集成用户通用的能力，包括注册登录，SSO单点登录，还要和大数据配合用户打标签，用户画像等。")]),v._v(" "),p("p",[v._v("营销中心这个也很重要，包含各种优惠活动、优惠券、红包、卡券、积分、会员等级、返佣之类的和营销相关的东西。")]),v._v(" "),p("p",[v._v("交易中心处理用户下订单，如果下单有返佣，积分之类的话，这个叫做履约，后面再说，关于交易中台是我后面要说的。")]),v._v(" "),p("p",[v._v("支付中心负责支付，退款，三方支付、银行对接、预算管控等等。")]),v._v(" "),p("p",[v._v("数据中心，这个其实和业务中台是两块方向，今天我要说的都是业务中台，针对业务系统的沉淀和共享，数据中台则是更偏向大数据方向的，不在这里赘述。")]),v._v(" "),p("p",[v._v("最底层服务是我们的基础设施和中间件的能力，比如数据库、消息服务Kafka、Rabbitmq、数仓、文件系统。")]),v._v(" "),p("p",[v._v("这张图画出来好像除了中台和前台没别的东西了，并不是这样，我只是想表达说共享服务是作为支撑上层业务的核心，下层还有后台的服务并没有画出来而已，也就是顺应着大中台、小前台的架构来说。")]),v._v(" "),p("h2",{attrs:{id:"服务拆分"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#服务拆分"}},[v._v("#")]),v._v(" 服务拆分")]),v._v(" "),p("p",[v._v("讲到这个服务抽象和共享就顺便说说服务拆分的原则，这个说法太多了，见仁见智，更多的是遵循原有的一些经验去做处理。")]),v._v(" "),p("p",[v._v("总的来说，现在我们主流的拆分都是根据业务角度去拆分。")]),v._v(" "),p("p",[p("strong",[v._v("高内聚、低耦合")]),v._v("，这个没啥说的，所有的服务都应该遵循这个原则，否则你要拆那就是瞎几把拆。")]),v._v(" "),p("p",[v._v("高内聚说的是比如交易中台，只围绕交易相关的、依赖性非常高的进行拆分。")]),v._v(" "),p("p",[v._v("低耦合则是说不同的服务，业务之间要隔离，不要耦合在一起，但是这个得有过程。")]),v._v(" "),p("p",[v._v("举个例子来说一开始的业务没什么人，用户地址这些信息就放在用户的服务里，好像也没什么问题。")]),v._v(" "),p("p",[v._v("随着业务的发展，这个地址信息和物流的服务好像关联越来越大，是不是就可以拆到物流服务里。")]),v._v(" "),p("p",[v._v("所以，这个要用发展的眼光去看待问题，不能一刀切。")]),v._v(" "),p("p",[v._v("回头去个小公司，别人就几万用户，几个程序员，就一个服务，你非要干微服务，拆几十个服务出来，这就不对是不是。")]),v._v(" "),p("p",[p("strong",[v._v("数据完整性")])]),v._v(" "),p("p",[v._v("其实也类似，业务相关数据一定要完整，比如你做拆分，拆分完了之后用户名字拆到别的系统里去了，那就不太合理了。")]),v._v(" "),p("p",[p("strong",[v._v("持续迭代")])]),v._v(" "),p("p",[v._v("也就是说要可持续性地做架构升级的调整和拆分，这个还是要跟着业务的发展走，不能一下拆的太细，也不能一下子太粗。。")]),v._v(" "),p("p",[v._v("你能明白我的意思吧，我没有在开车。。")]),v._v(" "),p("h2",{attrs:{id:"交易中台"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#交易中台"}},[v._v("#")]),v._v(" 交易中台")]),v._v(" "),p("p",[v._v("说了好久，总算说到交易中台了，我之前干交易中台干了差不多两年时间，自认为还算比较了解，除了一些东西没有实现之外，由于公司发展和时间的关系。")]),v._v(" "),p("p",[v._v("交易中台上面也提到过，主要就是从用户看到商品，然后到订单确认页，最后下订单，支付，配送，签收，这样一个整个过程都是交易中台在做的事情。")]),v._v(" "),p("p",[v._v("交易的定义就是"),p("strong",[v._v("买卖双方对有价物品和服务进行互通有无的行为，可以是以货币为交易媒介的过程，也可以是以物易物")]),v._v("。")]),v._v(" "),p("p",[v._v("而交易过程，现在一般都是分为"),p("strong",[v._v("订约")]),v._v("和"),p("strong",[v._v("履约")]),v._v("两个，这基本是所有的交易中台的规则了。")]),v._v(" "),p("p",[v._v("某某在什么时间做了什么事情，这是订约。")]),v._v(" "),p("p",[v._v("举个例子来说，买方给卖方提供了"),p("strong",[v._v("有价物品")]),v._v("，比如钱，卖方需要给买方提供"),p("strong",[v._v("服务")]),v._v("。")]),v._v(" "),p("p",[v._v("而履约的则是某某在约定的时间完成约定的事情，比如交付货币、物品或者服务。")]),v._v(" "),p("p",[v._v("整个流程大致就是这个样子，当然一般我们都会分为正向和逆向两个方向去处理，正向完成交易的过程，逆向你可以理解为取消、退款这个环节。")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a4ba301c934b46fcb5d57eb6b51768ca~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("p",[v._v("既然是中台，那么就要能适应各类的交易场景。")]),v._v(" "),p("p",[v._v("比如酒店行业你去预订房间，这是正向交易，最后你去入住、离店，这是你履约的过程。")]),v._v(" "),p("p",[v._v("供应链要采购，然后商家会发货，最后你签收，这也是订约和履约的过程。")]),v._v(" "),p("p",[v._v("点外卖也是同样的道理。")]),v._v(" "),p("p",[v._v("这些所有的场景，那么我们都可以用通用的流程来归纳起来，就是上面提到的通用的交易流程。")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/652920fea52f4de4bbcd469aac74aaf4~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("p",[v._v("抽象的概念说完了，需要再形象一点的来描述一下。")]),v._v(" "),p("p",[v._v("上面我们说到了一些现在比较常见的服务拆分和服务的划分，下面根据实际场景看看我们服务到底是怎么划分的。")]),v._v(" "),p("p",[v._v("这张图是美团的订单确认页，一般也叫做提单页。图太长，我拆分为3个小图来描述。")]),v._v(" "),p("p",[v._v("可以一起来分析一下这个页面应该由哪些服务来构成，由谁来聚合这么多服务的接口？")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e77424edfe2411d80bc1c7f4a48e4b0~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("p",[v._v("首先地址信息上面也提到过了， 这个由用户服务或者说是物流服务来提供比较合适。")]),v._v(" "),p("p",[v._v("那配送时间这方面就应该由物流的算法来提供，他们会根据运力、天气、骑手一堆信息来计算一个比较合理的送达时间。")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d7931f7334d43ccbe6ac9c435725603~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("p",[v._v("中间这一部分商品的详细信息肯定由商品服务来提供。")]),v._v(" "),p("p",[v._v("至于配送费啊、各种补贴、红包优惠券是不是该由营销来提供，这里其实会很复杂， 因为要计算各种条件的价格，计算出最终应该支付的金额，这个一般我们会由价格服务来输出。")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2836c8d22be4ea282f897b6434b1947~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("p",[v._v("最下面这一部分叫做搭售，可以在下单的同时去购买会员，这个其实就相当于下了两个订单，一单是外卖单，另外一个订单就是搭售订单，购买会员的订单，最终两个订单合并支付，保持最终一致性就行了，下单成功，同时会员购买成功。")]),v._v(" "),p("p",[v._v("最终下单成功之后发送消息，物流团队根据消息去履约配送，营销根据下单消息该送积分、送红包就怎么送，另外如果有搭售会员的话，还需要进行会员升级，这也是属于履约的一部分。")]),v._v(" "),p("p",[v._v("这个地方还有两个挺有意思的点。")]),v._v(" "),p("p",[v._v("第一个是扣库存的问题，应该是下单成功扣库存，还是支付成功扣库存（不用太考虑保存订单和扣库存分布式事务的问题，这个会保证最终一致性）。")]),v._v(" "),p("p",[v._v("一般所有的业务都会下单就扣库存，但是这样会有一个问题。")]),v._v(" "),p("p",[v._v("之前我们做活动，会把很多房间拿出来做优惠活动，单价就会便宜，但是库存有限，这个叫做尾房甩卖。")]),v._v(" "),p("p",[v._v("很多黄牛就先去下单把库存占住，然后再卖给用户，马上取消订单，帮用户下单。")]),v._v(" "),p("p",[v._v("所以我们之前有两种模式，针对这种类型的特殊情况会支付成功后才扣库存，普通模式像电商外卖一般没这种问题，都是下单就扣。")]),v._v(" "),p("p",[v._v("还有一个就是这个券的问题，不知道大家发现了没有，买了会员送券，可以立刻使用，下面还标注了，"),p("strong",[v._v("本单可用")]),v._v("。")]),v._v(" "),p("p",[v._v("你肯定能想到这个问题，一般我们是券发给用户了才能用，这里下单成功后发消息->履约->发券，这个券都还没有怎么提前用。")]),v._v(" "),p("p",[v._v("这又是一个交易系统里比较常见的，早两年应该是没有这个玩法的，也算是一个优化，一般会叫做虚拟券。")]),v._v(" "),p("p",[v._v("下单的时候去核销优惠券，一般会给营销传一个特殊的标记和参数，营销根据这个判断做特殊的处理，至于具体的逻辑，我也不是很清楚，搞的挺复杂的就是了。")]),v._v(" "),p("p",[v._v("再结合全景图看一下就清晰了和架构图看一下就清晰多了。")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83f38985b42f4bff95a73db3eded7f19~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}}),v._v(" "),p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/261ee4de004c4413bcbcc0e252f71edf~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("h2",{attrs:{id:"金融中台"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#金融中台"}},[v._v("#")]),v._v(" 金融中台")]),v._v(" "),p("p",[v._v("金融中台不够纯粹，与其说是中台，不如说是事业部更合适一点，一般现在国内很多公司的金融中台基本都逃脱不了这几块的内容，很多都非常类似，就是根据不同的业务有点出入而已。")]),v._v(" "),p("p",[p("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a46d8bd954624b43a7e1211ac5777acd~tplv-k3u1fbpfcp-watermark.awebp",alt:"img"}})]),v._v(" "),p("p",[v._v("支付是整个金融中台的核心，跳转的统一收银台又是支付的核心。")]),v._v(" "),p("p",[v._v("清结算也很核心，非常重要，这个我也干过一段时间，预算，活动、券这是营销的角度，预算则是财务金融的角度。")]),v._v(" "),p("p",[v._v("一般创建活动的时候一定要申请预算，活动创建设置库存数量，同时申请财务预算，一般情况都是1：1，创建成功不可以修改，库存可以临时改，但是预算改不了，除非重新申请。")]),v._v(" "),p("p",[v._v("金融中台自己领会好吧。")]),v._v(" "),p("h2",{attrs:{id:"去中台化"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#去中台化"}},[v._v("#")]),v._v(" 去中台化")]),v._v(" "),p("p",[v._v("这一段我不能放，涉及到一些公司隐私的东西，但是可以聊聊其他的。")]),v._v(" "),p("p",[v._v("比如开发流程，就我经历过的，中台这种部门一旦起来了，很容易一家独大，话语权太强，并且对于稳定性的要求太高，一定程度上阻碍了业务的开发。")]),v._v(" "),p("p",[v._v("其次对于业务的支撑和快速发展，其实可能没有想象中的那么好，经历过的大家应该也都会有体会的。")]),v._v(" "),p("p",[v._v("再者，中台这种产品必然涉及了太多的政治层面的博弈，我觉得SuperCell那种小公司玩得转确实可以，但是体量太大的公司玩的好挺难的，那体量不大的公司又没有太大必要搞什么鬼中台，你又不是啥游戏公司对不对，毕竟还是互联网公司为主，做业务开发为主。")]),v._v(" "),p("p",[v._v("好了，言尽于此吧，文章来源于艾小仙。")]),v._v(" "),p("p",{staticStyle:{"text-align":"right","font-size":"10px","font-style":"italic"}},[v._v("\nhttps://juejin.cn/post/7028151090654904333\n")])],1)}),[],!1,null,null,null);_.default=a.exports}}]);