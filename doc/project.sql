/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 12:48:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `saves` int(255) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'a1.jpg', 'YMZY/悦木之源 精选天然崖柏木手珠20mm 带榴疤 大颗 男款 文玩款', '580.00', '1', '2018-08-21 20:51:58');
INSERT INTO `goods` VALUES ('2', 'a2.jpg', 'Tiffany蒂芙尼 女士纯银樱花粉心形小珠Bead珐琅手链 30978811', '1448.00', '2', '2018-08-24 20:05:49');
INSERT INTO `goods` VALUES ('3', 'a3.jpg', 'Aurelie Bidermann/Aurelie Bidermann 女士 闪亮圆点装饰 手镯/手链', '1300.00', '0', '2018-08-21 20:54:08');
INSERT INTO `goods` VALUES ('4', 'a4.jpg', '施华洛世奇Swarovski 透明星体造型银色戒指 55mm5226283', '779.00', '0', '2018-08-21 20:54:56');
INSERT INTO `goods` VALUES ('5', 'a5.jpg', '施华洛世奇Swarovski 银色八角星银河系造型项链耳钉套装5253053', '2512.00', '0', '2018-08-21 20:55:53');
INSERT INTO `goods` VALUES ('6', 'a6.jpg', '施华洛世奇 Swarovski 星星款 闪亮密嵌 双层戒指', '968.00', '0', '2018-08-21 20:56:21');
INSERT INTO `goods` VALUES ('7', 'a7.jpg', 'Givenchy/纪梵希  碎钻耳钉项链套装 60404214 170605', '893.00', '134', '2018-08-21 20:56:59');
INSERT INTO `goods` VALUES ('8', 'a8.jpg', '【Designer Jewelry】OOAK x SECOO MING爱心水晶珍珠圆环单钻双指戒', '600.00', '75', '2018-08-21 20:57:58');
INSERT INTO `goods` VALUES ('9', 'a9.jpg', '【爆款】PANDORA/潘多拉 手链 正品串珠蓝色猫眼切面锆石 791725NMB', '575.00', '50', '2018-08-21 20:58:47');
INSERT INTO `goods` VALUES ('10', 'a10.jpg', '【包税】CARTIER/卡地亚  经典款LOVE系列 18K金玫瑰金色 戒指，窄款  B4085200', '8752.00', '61', '2018-08-21 20:59:17');
INSERT INTO `goods` VALUES ('11', 'a11.jpg', 'MIKO/蜜库珠宝 琥珀蜜蜡胸饰 女款可爱时尚小蜜蜂蜜蜡胸针/吊坠', '499.00', '59', '2018-08-21 20:59:54');
INSERT INTO `goods` VALUES ('12', 'a12.jpg', 'PANDORA/潘多拉 复古夜空吊饰791993CZ', '399.00', '52', '2018-08-21 21:00:34');
INSERT INTO `goods` VALUES ('13', 'a13.jpg', 'A&Y/A&Y 意大利设计 metal系列 女士S925银双环璀璨指环戒指', '1049.00', '37', '2018-08-21 21:01:31');
INSERT INTO `goods` VALUES ('14', 'a14.jpg', '【爆款】PANDORA/潘多拉  手链 正品串珠蓝色猫眼切面锆石 791725NBS', '575.00', '25', '2018-08-21 21:02:04');
INSERT INTO `goods` VALUES ('15', 'a15.jpg', '施华洛世奇 新品 Lilia 蝴蝶项链耳钉套装 女友礼物 镀玫瑰金色   5382365', '927.00', '31', '2018-08-21 21:02:42');
INSERT INTO `goods` VALUES ('16', 'a16.jpg', 'Givenchy/纪梵希 经典款圆形仿水晶女士项链耳钉套装 60461136-NY0', '589.00', '28', '2018-08-21 21:03:19');
INSERT INTO `goods` VALUES ('17', 'a17.jpg', '【包税】Swarovski 施华洛世奇 GINGER 女士金色多层次链坠 5253286', '929.00', '27', '2018-08-21 21:04:03');
INSERT INTO `goods` VALUES ('18', 'a18.jpg', '【包税】CARTIER/卡地亚 CDE CARTIER 18K金玫瑰金色  钻石戒指  B4086400', '10853.00', '26', '2018-08-21 21:04:32');
INSERT INTO `goods` VALUES ('19', 'a19.jpg', 'Givenchy/纪梵希 经典款圆形仿水晶玫瑰金色女士项链耳钉套装 60404214-9DH', '559.00', '26', '2018-08-21 21:05:05');
INSERT INTO `goods` VALUES ('20', 'a20.jpg', 'GONG XI LI/宫喜礼 《青华吟》蓝色珐琅系列多用途坠子', '259.00', '23', '2018-08-21 21:05:42');
INSERT INTO `goods` VALUES ('21', 'a21.jpg', '【包税】CARTIER/卡地亚  经典款LOVE系列 18K金玫瑰金色 钻石戒指  B4050700', '61522.00', '20', '2018-08-21 21:06:33');
INSERT INTO `goods` VALUES ('22', 'a22.jpg', 'PANDORA/潘多拉 纯银福袋锦囊串珠790332', '249.00', '15', '2018-08-21 21:07:04');
INSERT INTO `goods` VALUES ('23', 'a23.jpg', 'SANDYRILLA/仙蒂瑞拉 奢美11-12mm大溪地黑珍珠戒指-指间系列', '999.00', '18', '2018-08-21 21:07:37');
INSERT INTO `goods` VALUES ('24', 'a24.jpg', 'PANDORA/潘多拉 午夜星空琉璃串珠791359CZ', '249.00', '13', '2018-08-21 21:08:04');
INSERT INTO `goods` VALUES ('25', 'a25.jpg', 'PANDORA/潘多拉迪斯尼灰姑娘南瓜车串珠银色791573CZ', '750.00', '13', '2018-08-21 21:08:46');
INSERT INTO `goods` VALUES ('26', 'a26.jpg', '【新款】SANDYRILLA/仙蒂瑞拉 9-10mm大溪地黑珍珠S925银活口戒指-唯美', '560.00', '16', '2018-08-21 21:09:18');
INSERT INTO `goods` VALUES ('27', 'a27.jpg', '【Designer Jewelry】brosway/宝思薇意大利设计男士钛钢潮戒指 送男友', '231.00', '16', '2018-08-21 21:09:49');
INSERT INTO `goods` VALUES ('28', 'a28.jpg', '【Designer Jewelry】Le Petit Prince/Le Petit Prince 小王子原版授权天然钻石对戒（单只） 情侣戒指', '828.00', '16', '2018-08-21 21:10:22');
INSERT INTO `goods` VALUES ('29', 'a29.jpg', '【Designer Jewelry】brosway/宝思薇意大利设计男士钛钢潮戒指 送男友', '231.00', '0', '2018-08-21 21:11:03');
INSERT INTO `goods` VALUES ('30', 'a30.jpg', 'PANDORA/潘多拉 手链串珠子925银粉色锆石灵感间隔串饰 791359PCZ', '249.00', '12', '2018-08-21 21:11:34');
INSERT INTO `goods` VALUES ('31', 'a31.jpg', 'PANDORA/潘多拉 女士怀旧夜空蓝色珐琅串珠 791992CZ', '579.00', '15', '2018-08-21 21:12:00');
INSERT INTO `goods` VALUES ('32', 'a32.jpg', 'brosway/宝思薇欧美时尚男士轻奢潮指环小牛皮生日礼物送男友', '202.00', '15', '2018-08-21 21:12:26');
INSERT INTO `goods` VALUES ('33', 'a33.jpg', 'MIKO/蜜库珠宝 琥珀蜜蜡胸饰 女士贝壳镶圆珠蜜蜡胸花胸针', '499.00', '15', '2018-08-21 21:13:06');
INSERT INTO `goods` VALUES ('34', 'a34.jpg', '【包税】CARTIER/卡地亚 经典款LOVE系列 18K金玫瑰金色 戒指 B4084800', '13736.00', '15', '2018-08-21 21:13:38');
INSERT INTO `goods` VALUES ('35', 'a35.jpg', 'Givenchy/纪梵希 经典款圆形仿水晶银色女士项链耳钉套装 60404207-NY0', '559.00', '15', '2018-08-21 21:14:02');
INSERT INTO `goods` VALUES ('36', 'a36.jpg', 'Swarovski/施华洛世奇 Evil Eye恶魔之眼二合一叠加手链套装 5272256', '882.00', '11', '2018-08-21 21:14:27');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '442951031@qq.com', '123456', '2018-08-19 20:34:27');
INSERT INTO `user` VALUES ('2', '3068629579@qq.com', '123456', '2018-08-19 20:34:54');
INSERT INTO `user` VALUES ('3', '18279131262', '123', '2018-08-19 21:47:47');
INSERT INTO `user` VALUES ('4', '13879132756', '111111', '2018-08-20 21:56:26');
SET FOREIGN_KEY_CHECKS=1;
