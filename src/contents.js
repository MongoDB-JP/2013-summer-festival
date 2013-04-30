/*
	Contents
	
	イベントの中での催し物の全リスト
	
	実施の可否に関わらず、検討にのったものは全て、ここに記載する
	ここで記載したContentをスケジュールなどで参照する
*/

use summer_festival_2013;

db.contents.insert({
	title : "夏休みの宿題をMongoDB+αでやる",
	state_of_title : "temporary",
	type : [ "体験展示" ],
	target : [ "小学生", "中学生", "小学校教諭", "中学校教諭" ],
	state_of_content : "on planning",
	person_in_charge : [ ],
	description : [ "夏休みの宿題などで使われる生物観察のデータをMongoDBにおさめ、分析するプログラムを書く" ],
	need_help : [],
	notes : [ "これにIPAB関係者による生物学DBなどのネタが絡められると理想的" ]
});
	
db.contents.insert({
	title : "MongoDB＋PHPでWeb制作内職",
	state_of_title : "temporary",
	type : [ "体験展示", "実演展示" ],
	target : [ "主婦", "フリーランス" ],
	state_of_content : "on planning",
	person_in_charge : [ ],
	description : [ "MongoDBとPHPを使った手法を学んで一歩進んだWeb制作を身につけ、より高い副収入を得ましょう！！" ],
	need_help : [],
	notes : [ ]
});


db.contents.insert({
	title : "10gen Education体験コーナー",
	state_of_title : "temporary",
	type : [ "体験展示" ],
	target : [ "MongoDBエンジニア", "一般エンジニア", "初心者" ],
	state_of_content : "on planning",
	person_in_charge : [ "鈴木さん" ],
	description : [ "10gen Educationの日本語版を体験できるコーナー。" ],
	need_help : [ ],
	notes : [ "皆で一緒にやらせることで、この手のオンライン学習でうまく始められない人の背中を押す。" ]
})


db.contents.insert({
	title : "ヴァーチャル納涼もんご祭り",
	state_of_title : "temporary",
	type : [ "オンライン実演" ],
	target : [ "会場に来られない人", "ネット住人（拡散役）" ],
	state_of_content : "on planning",
	person_in_charge : [ ],
	description : [ "readonlyで表に公開されているMongoDBを用意して、そこへイベント会場で生成される様々なデータを投入してオンラインでほぼリアルタイムに見えるようにする「JSONでのプレゼンテーション」", "- 来場者数", "- 騒音係数", "- いいねの数", "- 会場設置のコメントボードのコンテンツ", "- tweetなどのまとめ", "- 演目のリアルタイム送出" ],
	need_help : [ "Webカメラとか何かで来場者数カウントできるような仕組みを募集", "これを残り期間で開発する猛者募集" ],
	notes : [ "オンラインへのプレゼンと、Mongoの柔軟性のアピールをかねる" ]
});


db.contents.insert({
	title : "自転車走行ログ with MongoDB 開発体験",
	state_of_title : "temporary",
	type : [ "講演" ],
	target : [ "MongoDBエンジニア", "一般エンジニア", "初心者" ],
	state_of_content : "on planning",
	person_in_charge : [ "佐藤さん" ],
	description : [ ],
	need_help : [ ],
	notes : [ "少しばかりですがRDBMS→MongoDBに移った経緯、ハマった過程などネタはあるので、時期的に合えば資料作って喋りたいと思います。" ]
});


db.contents.insert({
	title : "生物学情報とMongoDB",
	state_of_title : "temporary",
	type : [ "講演" ],
	target : [ "MongoDBエンジニア", "一般エンジニア", "初心者", "バイオインフォマティシャン" ],
	state_of_content : "on planning",
	person_in_charge : [ ],
	description : [ ],
	need_help : [ ],
	notes : [ "スポンサーであるIPABの発表枠です" ]
});


db.contents.insert({
	title : "実演！MongoDB運用24時！ 〜障害は会議室で起こっているんじゃない！現場で起こっているんだ！！〜",
	state_of_title : "temporary",
	type : [ "演劇" ],
	target : [ "高校生", "専門学校生", "非技術者" ],
	state_of_content : "on planning",
	person_in_charge : [ ],
	description : [ "システム運用の現場で起こりがちなドラマをMongoDB運用現場の再現劇として魅せます！" ],
	need_help : [ "出演者募集！", "脚本家・演出家募集" ],
	notes : [ "長時間やって、場内で「障害が発生しました！！」とかやるのがよいのか、短時間の劇としてシナリオどおりにやるのか悩み中" ]
});


db.contents.insert({
	title : "食す。モンゴイカ。",
	state_of_title : "temporary",
	type : [ "軽食販売", "軽食サンプル配布" ],
	target : [ "来場者" ],
	state_of_content : "on planning",
	person_in_charge : [ ],
	description : [ "MongoDB-JPのゆるキャラになっているモンゴイカを食べてませんか♪" ],
	need_help : [ "供給業者募集", "配布方法募集", "配布スタッフ募集" ],
	notes : [ "なんとかして会場で来場者に食べさせる方法を見つけたいです。",
		"会場的にはその場で焼くのはどう考えてもNGだと思います。",
		"レストランなどは同じ施設内にあるので調理は可能かもしれませんが、そもそも会場で飲食どのくらいOKなの？って話はあると思います。",
		"汚さない目的なら乾きものにするとか？" ]
});


db.contents.insert({
	title : "第一回 納涼もんご祭り PV",
	state_of_title : "fix",
	type : [ "制作映像" ],
	target : [ "共催者候補", "協賛者候補", "出展者候補", "取材者候補", "一般参加予定者" ],
	state_of_content : "on planning",
	person_in_charge : [ "福崎の友人Mr.T", "福崎の弟" ],
	description : [ "イベントへの参加を呼びかけるためのイメージ映像" ],
	need_help : [ "使えそうな素材募集" ],
	notes : [ "広報でとにかく使い回しができるもの", "15秒程度を想定" ]
});


db.contents.insert({
	title : "第一回 納涼もんご祭り on air",
	state_of_title : "fix",
	type : [ "中継映像" ],
	target : [ "オンライン参加者", "総集編の素材" ],
	state_of_content : "on planning",
	person_in_charge : [ ],
	description : [ "もんご祭りの会場の様子を生中継" ],
	need_help : [ "ustreamなど中継手段になれている人募集", "スタッフ募集", "機材募集" ],
	notes : [ "中継をしつつ、総集編のために録画もする", "固定カメラで流しっぱなしではなく、随所でスイッチや解説などが入ると見てる側的には気持ちよい" ]
});


db.contens.insert({
	title : "第一回 納涼もんご祭り 総集編",
	state_of_title : "fix",
	type : [ "制作映像" ],
	target : [ "全スポンサー", "将来のスポンサー", "全出展者", "将来の出展者", "将来のMongoユーザー" ],
	state_of_content : "on planning",
	person_in_charge : [ "福崎の友人Mr.T", "福崎の弟" ],
	description : [ "第一回 納涼もんご祭りの全てが分かる総集編映像" ],
	need_help : [ ],
	notes : [ "後のために作ります。成果として見えやすくして後々へつなげるためです！！",
		"スポンサーなどは特に、社内に持ち帰る成果物として分かりやすい物があることは非常に意味があります。それが第二回につながります。" ]
});


db.contents.insert({
	title : "MongoDB summer festival 2013 @Japan",
	state_of_title : "fix",
	type : [ "制作映像" ],
	target : [ "10gen", "海外のスポンサー", "海外のMongoDB User会" ],
	state_of_content : "on planning",
	person_in_charge : [ "福崎の友人Mr.T", "福崎の弟" ],
	description : [ "A summerized version of MongoDB summer festival 2013 @Japan." ],
	need_help : [ "英語文面の作文・監修者募集" ],
	notes : [ "夏祭りにしたのにはヴィジュアル的な理由があります。",
		"10gen（つまり外国人）にとって分かりやすい「日本独特」をアピールするためです。",
		"これによって10genに対するMongoDB-JPのプレゼンスは飛躍的にあがると考えています。",
		"・独自性（USAでは思いつかないスタイル、趣向）",
		"・期待感（参加者が一杯いて皆が楽しんでいる）",
		"・実行力（MongoDB-JPはかなりヤル！）" ]
});


db.contents.insert({
	title : "協力者ハッピ",
	state_of_title : "fix",
	type : [ "イベント演出" ],
	target : [ "共催者", "協賛者", "出展者", "運営スタッフ" ],
	state_of_content : "on planning",
	person_in_charge : [ ],
	description : [ "イベントを開催する側のメンバーは「協力者ハッピ」を着用しております。不明な点はご遠慮なく聞いてください！" ],
	need_help : [ "担当者募集" ],
	notes : [ "演出の一環" ]
});


db.contents.insert({
	title : "SIerに向けての MongoDB講座",
	state_of_title : "temporary",
	type : [ "講演", "パネルディスカッション" ],
	target : [ "SIer" ],
	state_of_content : "on planning",
	person_in_charge : [ ],
	description : [ "SIerが顧客への提案にMongoDBを盛り込めるようになる方法を伝授！" ],
	need_help : [ "講師募集", "実例や実験データ募集" ],
	notes : [ ]
});


db.contents.insert({
	title : "参加者受付システム、アンケートシステム by MongoDB",
	state_of_title : "temporary",
	type : [ "事前実演", "実演" ],
	target : [ "SIer", "MongoDBエンジニア", "一般エンジニア" ],
	state_of_content : "on planning",
	person_in_charge : [ "窪田さん" ],
	description : [ "イベント参加者が投票できるシステム、？？？なんとかランキング〜♪" ],
	need_help : [ ],
	notes : [ "スマフォとかから参加して貰うとか？",
		"サーバ代はスポンサーから頂いた中から清算します。",
		"それともAWSかAzureでスポンサーから提供いただくとか・・・NTT Com、IIJにも声をかけてCloudnやGIOも・・・・",
		"サーバに関しては、mongodbJP で使うサーバを流用してしまいましょう。" ]
});


db.contents.insert({
	title : "事例紹介　昨今のシステムでは殆どMongoが使えるぜ！",
	state_of_title : "temporary",
	type : [ "講演" ],
	target : [ "SIer", "ユーザ企業候補", "MongoDBエンジニア", "一般エンジニア" ],
	state_of_content : "on planning",
	person_in_charge : [ "窪田さん" ],
	description : [ "まあ昨今のシステムでは殆ど（金融以外は）あてはまりますけどね。" ],
	need_help : [ ],
	notes : [ "各種言語＞",
		"公式ドライバーでは、型付言語用にはBSON型が用意されていると思います。",
		"PHP等Array型に何でも入るタイプの言語では、そのまま帰ってきますね。",
		"サードパーティー製のドライバーはその限りではないかもしれません。",
		"因みに僕がMongoDBを採用する時の判断は以下の４つを重視してます。",
		"・複雑なトランザクション（２フェーズコミットなど）が必要無さそうなこと。",
		"・読み込み頻度＞＞＞書き込み頻度 であること。",
		"・データ量が50GBを超える。",
		"・障害時の運用の緊急性が高い（ゆっくり寝れない）",
		"上の２つはMUST、下のは参考です。あまりデータの構造などは気にしてません。",
		"まあ昨今のシステムでは殆ど（金融以外は）あてはまりますけどね。" ]
});


db.contents.insert({
	title : "米国におけるMongoDBビジネスモデル",
	state_of_title : "temporary",
	type : [ "講演" ],
	target : [ "SIer", "ユーザ企業候補", "MongoDBエンジニア", "一般エンジニア" ],
	state_of_content : "on planning",
	person_in_charge : [ "鈴木さん" ],
	description : [ "北米市場の統計情報をを少しご紹介さし上げます。" ],
	need_help : [ ],
	notes : [ ]
});


db.contents.insert({
	title : "お固い SIerだって MongoDBできるんだよ！ 〜MongoとLibreOfficeと私とSI〜",
	state_of_title : "temporary",
	type : [ "講演" ],
	target : [ "SIer", "ユーザ企業候補", "MongoDBエンジニア", "一般エンジニア" ],
	state_of_content : "on planning",
	person_in_charge : [ "小笠原さん" ],
	description : [ "MongoDB面白いし仕事で使えるといいんだけど、どうやって提案にもっていくのがいいのかなあを共有したい" ],
	need_help : [ ],
	notes : [ ]
});


db.contents.insert({
	title : "MongoDBをもっと知りたい！　書籍コーナー",
	state_of_title : "temporary",
	type : [ "展示", "販売" ],
	target : [ "来場者" ],
	state_of_content : "on planning",
	person_in_charge : [ "栗田さん" ],
	description : [ "関連書籍の紹介と可能であれば即売会" ],
	need_help : [ "展示・販売したい書籍募集中" ],
	notes : [ "筆者のサイン会も？",
		"他に販売したいものがあればここで" ]
});

