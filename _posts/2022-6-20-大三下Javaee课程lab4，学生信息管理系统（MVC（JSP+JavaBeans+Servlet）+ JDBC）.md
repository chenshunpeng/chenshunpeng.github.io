---
title: 大三下Javaee课程lab4，学生信息管理系统（MVC（JSP+JavaBeans+Servlet）+ JDBC）
commentable: true
Edit: 2022-6-20
mathjax: true
mermaid: true
tags: Javaee MVC JDBC
categories: Javaee
description: 大三下Javaee课程lab4，实现一个学生信息管理系统，所用技术为：MVC（JSP+JavaBeans+Servlet），JDBC
---

# 前置知识
实验目的：
1、熟悉MVC设计模式，掌握编程思路
2、综合运用JSP、Servlet、JavaBean、JDBC等技术实现MIS系统---学生信息管理系统（铁大）

## 一.JDBC技术
JDBC是Java Database Connectivity（Java数据库连接）的缩写，编程人员可以通过这个API接口连接到数据库，并使用结构化查询语言（SQL）完成对数据库的查找和更新

JDBC的目标是屏蔽不同的数据库驱动程序之间的差别，为开发者提供一个标准的、纯Java的数据库程序设计接口，为在Java中访问不同类型的数据库提供技术支持

**在Java程序中，通过JDBC访问数据库的步骤如下：**

①装载并注册数据库的JDBC驱动程序；
②建立与数据库的连接；
③创建Statement对象；
④调用SQL语句访问数据库；
⑤处理ResultSet中的记录集；
⑥关闭ResultSet、Statement和Connection对象。


## 二.MVC模式
### 1.MVC组成
MVC是 **Model-View-Controller** 的缩写，即模型-视图-控制器，是一种目前广泛流行的软件设计模式，MVC把一个应用的输入、处理、输出流程按照模型、视图、控制器的方式进行分离，从而将一个应用程序分成三个核心模块：模型、视图和控制器，它们各自完成不同的任务

简单地说，**模型是应用对象，视图是它在屏幕上的表示，控制器定义用户界面对用户输入的响应方式**
![在这里插入图片描述](https://img-blog.csdnimg.cn/2de614f967284066abf4da9860399918.png)

**1.视图（View）**

视图代表用户交互界面，对于Web应用来说，可以是JSP界面，也可以是HTML、XML和Applet。

随着应用的复杂性和规模性的增加，一个应用可能有很多不同的视图，同一个Web应用程序会提供多种用户界面。例如用户希望既能通过浏览器来收发电子邮件，还能通过手机来访问电子邮箱，这就要求Web网站需要同时提供Internet界面和WAP界面

视图能接受用户的输入数据，但是它并不进行任何数据处理，而是将接受的数据交予模型（Model）处理。视图还能接受模型发出的数据更新事件，从而对用户界面进行同步更新，向用户显示相关的数据。

**2.模型（Model）**

- 模型是应用程序的主体部分，就是业务流程的处理以及业务规则的制定。
- 模型接受视图请求的数据，并返回最终的处理结果。
- 一个模型能为多个视图提供数据，即同一个模型可以被多个视图重用，所以提高了应用的可重用性。
- 模型的功能一般由JavaBean来实现。

**3.控制器（Controller）**

- 控制器接受用户的输入并调用模型和视图，将模型与视图匹配在一起，共同完成用户的请求。
- 控制器的功能一般由Servlet实现。
- 控制器并不做任何的数据处理，而是控制着模型和视图之间的交互过程。

例如，用户点击一个连接，控制器接受请求后，并不处理业务信息，它只把用户的信息传递给模型，告诉模型做什么，选择符合要求的视图返回给用户。

因此，一个模型可能对应多个视图，一个视图可能对应多个模型。

### 2.使用MVC设计模式开发Web应用一般步骤

 1. 定义JavaBean表示数据

在Web应用中通常使用JavaBean对象或实体类存放数据或实现业务逻辑功能，JSP页面在作用域中取出数据，因此，首先需要根据应用处理的实体设计合适的JavaBean

 2. 使用Servlet处理请求

- 在MVC模式中，Servlet充当控制器功能，它从请求中读取请求信息（如表单数据）、创建JavaBean对象、执行业务逻辑，最后将结果转发到视图组件
- Servlet通常并不直接向客户输出数据。控制器创建JavaBean对象后需要填写该对象的值。可以通过请求参数值或访问数据库得到有关数据

 3. 填写JavaBean对象数据
 4. 将结果存储在作用域对象中
 5. 将请求转发到JSP页面
 6. 最后在JSP页面中显示数据

### 3.MVC模式两种开发模型

**模型一：JSP+JavaBeans的结合**
![在这里插入图片描述](https://img-blog.csdnimg.cn/9730a739a5b24ef995ddbe8d28012707.png)

在模型一中，JSP页面负责响应用户请求并将处理结果返回用户，所有的数据通过JavaBean来处理。

虽然该模型也实现了页面的显示和逻辑处理相分离，但是JSP既要负责业务流程控制，又要负责提供表示层数据，同时充当控制器和视图，未能实现这两个模块之间的独立和分离。所以当需要处理的业务逻辑很复杂时，常常会导致页面被嵌入大量的脚本语言或者Java代码。

因此模型一适合小型应用的开发，不适合开发复杂的大型应用程序。


**模型二：JSP+JavaBeans+Servlet的结合**
![在这里插入图片描述](https://img-blog.csdnimg.cn/feae3f7bd8644388825129522bdd129c.png)

模型二体系结构是一种联合使用JSP与Servlet来提供动态内容服务的方法。

它的主要思想是使用一个或多个Servlet作为控制器，用JSP生成表示层的内容，让Servlet完成深层次的处理任务，JavaBean作为模型的角色，充当JSP和Servlet通信的工具。

在该模型中， Servlet处理完后设置JavaBean的属性，JSP读取此JavaBean的属性，然后进行显示，在JSP页内没有处理逻辑，它只负责检索原先由Servlet创建的JavaBean对象，从Servlet中提取动态内容插入到静态模板。


## 三.MIS系统

所谓MIS（管理信息系统--Management Information System）系统，主要指的是进行日常事务操作的系统。这种系统主要用于管理需要的记录，并对记录数据进行相关处理，将处理的信息及时反映给管理者的一套网络管理系统

# 铁大学生信息管理系统实现
## 一.需求分析
- 每个学生的基本信息有：学生的学号、学生的姓名、性别、年龄、体重、身高等信息；
- 系统应具有提供学生基本信息的创建、查询、修改和删除等操作功能；
- 系统应具有较好的交互性，便于用户的操作使用。

## 二.总体设计
系统功能模块划分以及每个模块的工作流程

### 1.列出全部学生模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/d133ea24e1b641218a36e7c1d179babf.png)
### 2.按条件查询学生模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/8a115948b671465f847d3e6dba1563a7.png)
### 3.新添加学生模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/aa022954527a4ab8a99407871424e0ff.png)
### 4.按条件删除学生模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/53b05205d68848cb8af22b3caa5dc502.png)
### 5.按条件修改学生模块
![在这里插入图片描述](https://img-blog.csdnimg.cn/ddbfd5471d2245eb8fb0639eb1f4f39a.png)
## 三.详细设计与代码实现
### ①建立数据库
新建一个数据库，命名为students
在students数据库中新建一个学生信息表stu_info


字段 	|中文描述 	|数据类型 	|可否为空 
-------- | -----| -----| -----
id 	|学生学号 	|int 	|否 
name 	|学生名字 	|varchar(20) 	|是 
sex 	|性别 	|varchar(4) 	|是 
age 	|年龄 	|int 	|是 
weight 	|体重 	|float 	|是 
hight 	|身高 	|float	|是 
blood	|血型	|varchar(4)	|是

![在这里插入图片描述](https://img-blog.csdnimg.cn/7ff837bfc9e844deb9d340a0d4fc94d5.png)
### ②设计系统所需要的JavaBean 
![在这里插入图片描述](https://img-blog.csdnimg.cn/5a86065f288f4d1d8bc8dd302757f6b9.png)

#### 1.DBConnection.Java类

该JavaBean将数据库连接操作和关闭操作封装起来，在以后的数据库操作中可以直接调用这个JavaBean的方法，该JavaBean应该包含的方法有：

① 数据库的连接，获得一个连接对象的方法：**Connection getDBconnection()**

② 当数据库操作完成后，关闭连接并释放资源的方法：**void closeDB(Connection con,PreparedStatement pstm, ResultSet rs)**


实现代码：

```java
package model_Db;

import java.sql.*;

public class DBConnection {
    public static Connection getDBconnection(){
        String driverName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";   //驱动程序名
        String userName = "sa";                      //数据库用户名
        String userPwd = "***";                      //密码，我这里用***代替了

        String  url="jdbc:sqlserver://localhost:1433;databaseName=students";

        try {
            //Class.forName加载驱动
            Class.forName(driverName);
            //DriverManager.connect(url,username, password)获取连接对象
            Connection con=DriverManager.getConnection(url,userName,userPwd);
            return con;
        }catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
    public static void closeDB(Connection con,PreparedStatement  pstm, ResultSet rs){
        try {
            if(rs!=null) rs.close();
            if(pstm!=null) pstm.close();
            if(con!=null) con.close();
        }catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```
难点在`Class.forName(driverName)`的理解，可看下面的博客：

[Class.forName()用法详解](https://blog.csdn.net/Kaiwii/article/details/7405761?spm=1001.2101.3001.6650.9&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~default-9-7405761-blog-51893342.pc_relevant_default)

[jdbc加载驱动 Class.forName()的作用](https://blog.csdn.net/u010644448/article/details/51893342?spm=1001.2101.3001.6650.4&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~BlogCommendFromBaidu~default-4-51893342-blog-53080489.pc_relevant_default)
#### 2.DbUtil.Java类
这个JavaBean是对数据库表的操作的封装，由于对数据表的操作可以分为两类，查询操作和更新操作，所以需要两个方法：

① 数据库记录的添加、修改、删除方法：**int updateSQL(String sql)**

② 数据库记录的查询方法：**ResultSet QuerySQL(String sql)** 

实现代码：

```java
package model_Db;

import java.sql.*;

public class DbUtil{
	 private Connection con=null;
	 private PreparedStatement pstm=null;
	 private ResultSet rs=null;
	//设计对数据库记录变更的方法(数据库记录的添加、修改、删除方法)，其中查询SQL语句作为方法的形参	
	public int updateSQL(String sql){
		int n=-1;
		try {
		    con=DBConnection.getDBconnection();
		    pstm=con.prepareStatement(sql);
		    n=pstm.executeUpdate();
		} catch (SQLException e) {e.printStackTrace();}
		DBConnection.closeDB(con, pstm,rs);
		return n;
	}
	//数据库记录的查询方法
	public ResultSet QuerySQL(String sql){
		try {
		    con=DBConnection.getDBconnection();	
		    pstm= con.prepareStatement(sql,ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_READ_ONLY);
		    rs=pstm.executeQuery();
		    return rs;
		  } catch (SQLException e) {e.printStackTrace();}
		 DBConnection.closeDB(con, pstm,rs);
		  return null;
   }
}
```
这里难点在PreparedStatement的理解，PreparedStatement是Statement的子接口，表示预编译的 SQL 语句的对象，SQL 语句被预编译并存储在PreparedStatement 对象中，然后可以使用此对象多次高效地执行该语句，如果有参数的话还需要添加输入的参数

使用PrepareStatement对象有三大优点：
    1、防止sql攻击
    2、提高代码可读性、可维护性
    3、提高sql执行效率

可看：

[JDBC连接mysql数据库及PrepareStatement的作用及原理](https://wenku.baidu.com/view/ff5c8b17ba0d6c85ec3a87c24028915f804d8425.html)

[pstmt = conn.prepareStatement(sql);是什么意思](https://zhidao.baidu.com/question/751239441511310092.html)
### ③设计系统所需要的Servlet
关于Servlet的知识可看：[Servlet教程](http://c.biancheng.net/servlet2/)

设计添加记录的insert.java：
```java
package Controller_Servlet;

import java.io.IOException;
//import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model_Db.DbUtil;

@WebServlet("/insert")
public class insert extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
	    int id=Integer.parseInt(request.getParameter("id"));     
	    String name=request.getParameter("name");
	    String sex=request.getParameter("sex");
	    int age=Integer.parseInt(request.getParameter("age"));
	    float weight=Float.parseFloat(request.getParameter("weight"));
	    float hight=Float.parseFloat(request.getParameter("hight"));
	    String blood=request.getParameter("blood");
	    String sql1="Insert into stu_info(id,name,sex,age,weight,hight,blood)";
	    String sql2="values("+id+",'"+name+"','"+sex+"',"+age+","+weight+","+hight+",'"+blood+"')";
	    String sql=sql1+sql2;
	    DbUtil run=new DbUtil();
	    int n=run.updateSQL(sql);
	    if(n>=1)
	    	request.getRequestDispatcher("success.jsp").forward(request,response);	
		else       		        	
		    request.getRequestDispatcher("error.jsp").forward(request,response);
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);		
	}
}
```
这里使用了 `@WebServlet`注解，`@WebServlet` 用于将一个类声明为 Servlet，该注解会在部署时被容器处理，容器根据其具体的属性配置将相应的类部署为 Servlet，`@WebServlet` 属于类级别的注解，标注在继承了 HttpServlet 的类之上，常用的写法是将 Servlet 的相对请求路径（即 value）直接写在注解内，如`@WebServlet("/insert")`

可看：[@WebServlet注解（Servlet注解）](http://c.biancheng.net/servlet2/webservlet.html)
### ④设计系统所需要的JSP页面
HTML 系列教程可看：[HTML 系列教程](https://www.w3school.com.cn/h.asp)

![在这里插入图片描述](https://img-blog.csdnimg.cn/9e8e67a82d084ce292e961a0c7d21c06.png)

#### 1.index部分（index_stu.jsp，index_stu_left.jsp，index_stu_right.jsp，index_stu_title.jsp）
![在这里插入图片描述](https://img-blog.csdnimg.cn/a72d6f74eabe4967a67799bf612d5d28.png)

我们首先建立index_stu.jsp，即网站主页面，在里面放好index_stu_left.jsp，index_stu_right.jsp，index_stu_title.jsp这3个页面，依次表示左边菜单栏，右边
每一个菜单所对应的信息显示页面，网站首页标题这3部分：


网站主页面：index_stu.jsp
![在这里插入图片描述](https://img-blog.csdnimg.cn/fb6d7992d85949008e16a5965bea22e5.png)
```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>        
        <title>石家庄铁道大学学生信息管理系统</title>
    </head>
    <frameset rows="80,*">
        <frame src="index_stu_title.jsp" scrolling="no">
        <frameset cols="140,*">
             <frame src="index_stu_left.jsp" scrolling="no">
             <frame src="index_stu_right.jsp" name="right" scrolling="auto">
        </frameset>
    </frameset>
</html>
```

index_stu_left.jsp

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>        
        <title>菜单页面</title>
    </head>
    <body>
        <br><br><br>        
        <p><a href="find_stu_all.jsp" target="right">列出全部学生</a></p>        
        <p><a href="insert_stu_tijiao.jsp" target="right">新添加学生</a></p>  
        <p><a href="find_stu_tijiao.jsp" target="right">按条件查询学生</a></p>             
        <p><a href="update_stu_tijiao.jsp" target="right">按学号修改学生</a> </p>
        <p><a href="delete_stu_tijiao.jsp" target="right">按学号删除学生</a></p>       
        
    </body>
</html>
```

index_stu_right.jsp

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head> <title>信息显示页面</title> </head>
     <body>
     </body>
</html>
```

index_stu_title.jsp

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>       
        <title>页面标题</title>
    </head>
    <body>
        <center>
           <h1>铁大学生信息管理系统</h1>
        </center>
    </body>
</html>
```
#### 2.insert部分（insert_stu_tijiao.jsp）
![在这里插入图片描述](https://img-blog.csdnimg.cn/7e4b393460e2486ebf3e23464187bbc2.png)

界面如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/941c4f7c2f4a4d4aa3930623b6ddf897.png)
模块图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/aa022954527a4ab8a99407871424e0ff.png)
insert_stu_tijiao.jsp

```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>  <title>添加信息提交页面</title>  </head>
    <body>
       <form action= "insert"  method="post">
       <table border="0" width="238" height="252">
           <tr>
               <td>学号</td>
               <td><input type="text" name="id"></td>
           </tr>
           <tr>
               <td>姓名</td>
               <td><input type="text" name="name"></td>
           </tr>
           <tr>
               <td>性别</td>
               <td><input type="text" name="sex" ></td>
           </tr>
           <tr>
               <td>年龄</td>
               <td><input type="text" name="age"></td>
           </tr>
           <tr>
               <td>体重</td>
               <td><input type="text" name="weight"></td>
           </tr>
           <tr>
               <td>身高</td>
               <td><input type="text" name="hight"></td>
           </tr>
            <tr>
               <td>血型</td>
               <td><input type="text" name="blood"></td>
           </tr>
           <tr align="center">
               <td colspan="2">
                  <input  type="submit" value="添  加">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <input  type="reset" value="取  消">
               </td>
           </tr>
       </table>
       </form>       
    </body>
</html>
```
#### 3.success部分（success.jsp）
![在这里插入图片描述](https://img-blog.csdnimg.cn/9e7ac40c71c248318eed340c734c22b9.png)
模块图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/53b05205d68848cb8af22b3caa5dc502.png)
比如完成 insert 操作后会出现：
![在这里插入图片描述](https://img-blog.csdnimg.cn/cf071176fb8a4ea5ae66d561ccab04ce.png)
success.jsp
```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>   <title>成功页面</title> </head>  
  <body>   
       数据库操作成功！<br>  
  </body>
</html>
```
#### 4.error部分（error.jsp）
![在这里插入图片描述](https://img-blog.csdnimg.cn/c4cdd47c522b4080ac13749b8812e965.png)
新添加学生模块图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/aa022954527a4ab8a99407871424e0ff.png)
按条件删除学生模块图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/53b05205d68848cb8af22b3caa5dc502.png)
error.jsp
```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>   <title>出错页面</title> </head>  
  <body>   
      数据库操作失败！<br>  
  </body>
</html>
```

#### 5.delete部分（delete_stu_tijiao.jsp，delete_stu_3.jsp）
![在这里插入图片描述](https://img-blog.csdnimg.cn/4550c83d1116481b962549a5c424ed9a.png)

首先是删除界面的设计：delete_stu_tijiao.jsp
![在这里插入图片描述](https://img-blog.csdnimg.cn/8edd6cf88f9e424fb92c9a3559e33de2.png)
新添加学生模块图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/aa022954527a4ab8a99407871424e0ff.png)
按条件删除学生模块图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/53b05205d68848cb8af22b3caa5dc502.png)
```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>  <title>删除条件提交页面</title>  </head>  
  <body> 
         请选择删除记录条件<hr width="100%" size="3"> 
        <form action= "delete_stu_3.jsp"  method="post">
            学号: <input type="text" name="id"><br> <p>  
              <input type="submit" value="提  交">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                  
              <input type="reset" value="取  消"> 
       </form>
  </body>
</html>
```
对于删除成功与否，设计第二个界面：delete_stu_3.jsp

删除成功：

![在这里插入图片描述](https://img-blog.csdnimg.cn/99269c8bed5c45568b86b87800d33425.png)
删除失败：
![在这里插入图片描述](https://img-blog.csdnimg.cn/c11f09548a454e5bb0667914a4f232a3.png)

```java
<%@ page language="java" import="java.sql.*" import="model_Db.*" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>    
    <title>利用提交条件删除记录页面</title> 
  </head>
  <body> 
    <%
      Connection conn = DBConnection.getDBconnection(); 
      Statement stmt=conn.createStatement();
      request.setCharacterEncoding("UTF-8");//设置字符编码，避免出现乱码        
      String id=request.getParameter("id");       
      String sql="delete from stu_info where id=?";
      PreparedStatement  pstmt= conn.prepareStatement(sql,ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_READ_ONLY);   
      pstmt.setString(1,id); 
      try{ 
          int n=pstmt.executeUpdate();
          if(n>=1){%>
              数据删除操作成功！<br>
          <%}
          else{%>
             数据删除操作失败！<br>
          <%} 
     }catch(Exception e){%>
           删除更新过程出现异常错误！<br>
           <%=e.getMessage()%>
     <%
     }
     if(stmt!=null){ stmt.close(); }
     if(conn!=null){ conn.close(); } 
    %>
  </body>
</html>
```
#### 6.find部分（find_stu_5.jsp，find_stu_all.jsp，find_stu_tijiao.jsp，find_stu_tijiao.jsp）
![在这里插入图片描述](https://img-blog.csdnimg.cn/95d45468b6be48bc92c181fd69d4b035.png)

由提交页面获取查询条件并实现查询的页面：find_stu_5.jsp
![在这里插入图片描述](https://img-blog.csdnimg.cn/0aa429e6f4eb4f50ab594f713604a395.png)

```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
   import="java.sql.*" import="model_Db.*" pageEncoding="UTF-8"%>
<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<!DOCTYPE html>
<%
    List<List<String>> stu= new ArrayList<>();
%>
<html>
    <head> <title>由提交页面获取查询条件并实现查询的页面</title> </head>
    <body>
        <center>
       <% 
          Connection conn = DBConnection.getDBconnection();
          request.setCharacterEncoding("UTF-8");//设置字符编码，避免出现乱码        
          String sex=request.getParameter("sex");
          float weight1=Float.parseFloat(request.getParameter("w1"));
          float weight2=Float.parseFloat(request.getParameter("w2"));
          String sql="select  *  from  stu_info where weight>=? and weight<=? " ;

          PreparedStatement stmt= conn.prepareStatement(sql,ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_READ_ONLY);
          stmt.setFloat(1,weight1);
          stmt.setFloat(2,weight2);
          ResultSet rs=stmt.executeQuery();

           rs.beforeFirst(); //移至第一条记录之前

           while(rs.next()){
               String t=rs.getString("sex");
               if(!sex.equals("男女") && !t.equals(sex))continue;
               System.out.println(1);
               List<String> temp = new ArrayList<>();
               temp.add(rs.getString("id"));
               temp.add(rs.getString("name"));
               temp.add(rs.getString("sex"));
               temp.add(rs.getString("age"));
               temp.add(rs.getString("weight"));
               temp.add(rs.getString("hight"));
               temp.add(rs.getString("blood"));
               stu.add(temp);
           }

         %>你要查询的学生数据表中共有
          <font size="5" color="red"> <%=stu.size()%></font>人
          <form>
          <table border="2" bgcolor= "ccceee" width="650">
               <tr bgcolor="CCCCCC" align="center">
                   <td>记录条数</td> <td>学号</td> <td>姓名</td><td>性别</td> <td>年龄</td><td>体重</td><td>身高</td><td>血型</td>
               </tr>
<%--          <%--%>
<%--             while(rs.next()){--%>
<%--          %>   <tr align="center">--%>
<%--                  <td><%= rs.getRow()%></td>--%>
<%--                  <td><%= rs.getString("id") %></td>--%>
<%--                  <td><%= rs.getString("name") %></td>--%>
<%--                  <td><%= rs.getString("sex") %></td>--%>
<%--                  <td><%= rs.getString("age") %></td>--%>
<%--                  <td><%= rs.getString("weight") %></td>--%>
<%--                  <td><%= rs.getString("hight") %></td>--%>
<%--                  <td><%= rs.getString("blood") %></td>--%>
<%--                </tr>            --%>
<%--             <% }%>--%>
              <%
                  int p=1;
                  for (List<String> te : stu){
              %>   <tr align="center">
                  <td><%= p++ %></td>
                  <td><%= te.get(0)%></td>
                  <td><%= te.get(1)%></td>
                  <td><%= te.get(2)%></td>
                  <td><%= te.get(3)%></td>
                  <td><%= te.get(4)%></td>
                  <td><%= te.get(5)%></td>
                  <td><%= te.get(6)%></td>
              </tr>
              <% }%>
           </table>
           </form>
        </center>
         <%if(stmt!=null){ stmt.close(); }
           if(stmt!=null){ stmt.close(); }
           if(conn!=null){ conn.close(); } 
         %>  
    </body>
</html>
```

实现列出全部学生的功能：find_stu_all.jsp
![在这里插入图片描述](https://img-blog.csdnimg.cn/4299fbb18e3649f29ca0d42c1004fd60.png)
模块图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/d133ea24e1b641218a36e7c1d179babf.png)
关于如何在jsp里面写java代码，可看：[如何在jsp里面写java代码](https://blog.csdn.net/sheng_xinjun/article/details/52943446?spm=1001.2101.3001.6650.1&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1-52943446-blog-98715656.pc_relevant_paycolumn_v3)

对于HTML的常用标签必须很熟（如`<tr>`标签），可看：[HTML \<tr> 标签](https://www.w3school.com.cn/tags/tag_tr.asp)

```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
    import="java.sql.*" import="model_Db.*" pageEncoding="UTF-8"%>
    
<!DOCTYPE html>
<html>
    <head> <title>显示所有学生的页面</title> </head>
    <body>
        <center>
        <%
          DbUtil run=new DbUtil();
          String sql="select  *  from  stu_info "; 
          ResultSet rs=run.QuerySQL(sql);       
          rs.last(); //移至最后一条记录 
         %>你要查询的学生数据表中共有
          <font size="5" color="red"> <%=rs.getRow()%></font>人
          <table border="2" bgcolor= "ccceee" width="650">
               <tr bgcolor="CCCCCC" align="center">
                   <td>记录条数</td> <td>学号</td> <td>姓名</td><td>性别</td> <td>年龄</td><td>体重</td><td>身高</td><td>血型</td>
               </tr>
          <% rs.beforeFirst(); //移至第一条记录之前
             while(rs.next()){
          %>   <tr align="center">
                  <td><%= rs.getRow()%></td>
                  <td><%= rs.getString("id") %></td>
                  <td><%= rs.getString("name") %></td>
                  <td><%= rs.getString("sex") %></td>
                  <td><%= rs.getString("age") %></td>
                  <td><%= rs.getString("weight") %></td>
                  <td><%= rs.getString("hight") %></td>
                  <td><%= rs.getString("blood") %></td>
                </tr>            
             <% }%>
           </table>
        </center>            
    </body>
</html>
```

查询条件提交页面：find_stu_tijiao.jsp
![在这里插入图片描述](https://img-blog.csdnimg.cn/e30cf35ae2564444a74fc0601ab95f76.png)
模块图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/8a115948b671465f847d3e6dba1563a7.png)
```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>  <title>查询条件提交页面</title>  </head>  
  <body> 
         按学号查询<hr width="100%" size="3"> 
       <form action= "find_stu_5.jsp"  method="post">  
               性别：男 <input type="radio" value="男" name="sex" checked="checked">
               女<input type="radio"  value="女" name="sex">
               不区分性别<input type="radio"  value="男女" name="sex"><br><br>
               体重范围: 最小<input type="text" name="w1">&nbsp;  
                         最大<input type="text" name="w2"> <p> 
              <input type="submit" value="提  交">
              &nbsp;&nbsp;&nbsp;&nbsp;                  
              <input type="reset" value="取  消"> 
       </form>
  </body>
</html>
```

按学号修改学生功能中的查询页面：findForUpdate.jsp
![在这里插入图片描述](https://img-blog.csdnimg.cn/bbf72fdcc83b4e3d879eb528aa56548e.png)

```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
   import="java.sql.*" import="model_Db.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head> <title>由提交页面获取查询条件并实现查询的页面</title> </head>
    <body>       
        <%
          Connection conn = DBConnection.getDBconnection();
          request.setCharacterEncoding("UTF-8");//设置字符编码，避免出现乱码                     
          String id=request.getParameter("id");                       
          String sql="select  *  from  stu_info where id=?"; 
          PreparedStatement  stmt= conn.prepareStatement(sql,ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_READ_ONLY);
          stmt.setString(1,id); 
          ResultSet rs=stmt.executeQuery();   
          rs.last(); //移至最后一条记录 
         %>你要查询的学生数据表中共有
          <font size="5" color="red"> <%=rs.getRow()%></font>人
          <form  method="post" action="update_stu_edit.jsp">          
            <table border="2" bgcolor= "ccceee" width="650">
               <tr bgcolor="CCCCCC" align="center">
                  <td>记录条数</td> <td>学号</td> <td>姓名</td>
                  <td>性别</td> <td>年龄</td><td>体重</td><td>身高</td><td>血型</td>                  
               </tr>
          <% rs.beforeFirst(); //移至第一条记录之前
             while(rs.next()){
          %>   <tr align="center">
                  <td><%= rs.getRow()%><br></td>
                  <td><%= rs.getString("id") %><br></td>
                  <td><%= rs.getString("name") %><br></td>
                  <td><%= rs.getString("sex") %><br></td>
                  <td><%= rs.getString("age") %><br></td>
                  <td><%= rs.getString("weight") %><br></td>
                  <td><%= rs.getString("hight") %><br></td>
                  <td><%= rs.getString("blood") %><br>
                  <input type="hidden" name="numb" value=<%=rs.getString("id")%>></td>
                  <td> <input type="Submit"  value="修改"></td>                  
                </tr>            
             <% }%>
           </table> 
           </form>       
         <%if(stmt!=null){ stmt.close(); }
           if(stmt!=null){ stmt.close(); }
           if(conn!=null){ conn.close(); } 
         %>  
    </body>
</html>
```
#### 7.update部分（update_stu_edit.jsp，update_stu_tijiao.jsp，update_stu_2.jsp，update_stu_write.jsp）
![在这里插入图片描述](https://img-blog.csdnimg.cn/c09f2d2dc4de47a786873f7e1bf304a5.png)

按学号修改学生的主页面：update_stu_edit.jsp
![在这里插入图片描述](https://img-blog.csdnimg.cn/d16be92391c54193899d834b720e3311.png)
模块图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/ddbfd5471d2245eb8fb0639eb1f4f39a.png)
```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
    import="java.sql.*" import="model_Db.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>  <title>修改编辑页面</title>  </head>
    <body>       
       <% Connection conn = DBConnection.getDBconnection(); 
          request.setCharacterEncoding("UTF-8");//设置字符编码，避免出现乱码          
          String numb=request.getParameter("numb");  
          session.setAttribute("numb",numb);                
          String sql="select  *  from  stu_info where id=?"; 
          PreparedStatement  stmt= conn.prepareStatement(sql);
          stmt.setString(1,numb); 
          ResultSet rs=stmt.executeQuery();  
          if(rs.next()){
              int id=rs.getInt("id"); 
              String name2=rs.getString("name");
              String sex2=rs.getString("sex"); 
              int age=rs.getInt("age");
              float weight=rs.getFloat("weight");
              float hight=rs.getFloat("hight"); 
              String blood=rs.getString("blood");
              if(rs!=null){ rs.close(); }
              if(stmt!=null){ stmt.close(); }
              if(conn!=null){ conn.close(); } 
              %> 
              <form action= "update_stu_write.jsp"  method="post">
               <table border="0" width="238" height="252">
                 <tr><td>学号</td><td><input name="id" value=<%=id%>></td></tr>
                 <tr><td>姓名</td><td><input name="name2" value=<%=name2%>></td></tr>
                 <tr><td>性别</td><td><input name="sex2" value=<%=sex2%>></td></tr>
                 <tr><td>年龄</td><td><input name="age"value=<%=age%>></td></tr>
                 <tr><td>体重</td><td><input name="weight"value=<%=weight%>></td></tr>
                 <tr><td>身高</td><td><input name="hight"value=<%=hight%>></td></tr>
                 <tr><td>血型</td><td><input name="blood"value=<%=blood%>></td></tr>
                 <tr align="center">
                   <td colspan="2">
                     <input type="submit" value="提  交">&nbsp;&nbsp;&nbsp;&nbsp;
                     <input type="reset" value="取  消">
                  </td>
                 </tr>
              </table>
             </form>
           <%}
           else{%>
               没有找到合适条件的记录！！<%
             if(rs!=null){ rs.close(); }
             if(stmt!=null){ stmt.close(); }
             if(conn!=null){ conn.close(); } 
            }%>                
    </body>
</html>
```

按学号修改学生主页面：update_stu_tijiao.jsp
![在这里插入图片描述](https://img-blog.csdnimg.cn/dfb86bb6deed4cc0978bb5d5063435a4.png)
模块图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/ddbfd5471d2245eb8fb0639eb1f4f39a.png)
```html
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>  <title>查询条件提交页面</title>  </head>  
  <body> 
         请选择查询条件<hr width="100%" size="3"> 
       <form action= "findForUpdate.jsp"  method="post">                       
                          学号: <input type="text" name="id"><br> <p>                                        
              <input type="submit" value="提  交">
              &nbsp;&nbsp;&nbsp;&nbsp;                  
              <input type="reset" value="取  消"> 
       </form>
  </body>
</html>
```
根据姓名，性别（name，sex）来修改后重写记录页面：update_stu_2.jsp
![在这里插入图片描述](https://img-blog.csdnimg.cn/6191d869d00d4f01848b1bb1d7fa7c80.png)

```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
    import="java.sql.*" import="model_Db.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>    
    <title>修改后重写记录页面</title> 
  </head>
  <body> 
    <%
      Connection conn = DBConnection.getDBconnection();          
      String sql="update stu_info set id=?,name=?,sex=?,age=?,weight=?,hight=? where name=? and sex=?";
      PreparedStatement pstmt= conn.prepareStatement(sql);
      request.setCharacterEncoding("UTF-8");//设置字符编码，避免出现乱码
      int id=Integer.parseInt(request.getParameter("id"));     
      String name2=request.getParameter("name2");
      String sex2=request.getParameter("sex2");
      int age=Integer.parseInt(request.getParameter("age"));
      float weight=Float.parseFloat(request.getParameter("weight"));
      float hight=Float.parseFloat(request.getParameter("hight"));
      String name=(String) session.getAttribute("name");
      String sex=(String) session.getAttribute("sex");
      String blood=(String) session.getAttribute("blood");
      pstmt.setInt(1,id);
      pstmt.setString(2,name2);
      pstmt.setString(3,sex2);
      pstmt.setInt(4,age);
      pstmt.setFloat(5,weight);
      pstmt.setFloat(6,hight);
      pstmt.setString(7,name);
      pstmt.setString(8,sex);    
      try{ 
          int n=pstmt.executeUpdate();
          if(n>=1){%>
              重写数据操作成功！<br>
          <%}
          else{%>
             重写数据操作失败！<%=n%><br>
          <%} 
     }catch(Exception e){%>
           重写过程出现异常错误！<br>
           <%=e.getMessage()%>
     <% 
     }
     if(pstmt!=null){ pstmt.close(); }
     if(conn!=null){ conn.close(); } 
    %>
  </body>
</html>

```

根据学号（id）来修改后重写记录页面：update_stu_write.jsp
![在这里插入图片描述](https://img-blog.csdnimg.cn/e6965018064f4b298396e08424aa44c5.png)


```java
<%@ page language="java" contentType="text/html; charset=UTF-8"
    import="java.sql.*" import="model_Db.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>    
    <title>修改后重写记录页面</title> 
  </head>
  <body> 
    <%
      Connection conn = DBConnection.getDBconnection();          
      String sql="update stu_info set id=?,name=?,sex=?,age=?,weight=?,hight=?,blood=? where id=?";
      PreparedStatement pstmt= conn.prepareStatement(sql);
      request.setCharacterEncoding("UTF-8");//设置字符编码，避免出现乱码
      int id=Integer.parseInt(request.getParameter("id"));     
      String name2=request.getParameter("name2");
      String sex2=request.getParameter("sex2");
      int age=Integer.parseInt(request.getParameter("age"));
      float weight=Float.parseFloat(request.getParameter("weight"));
      float hight=Float.parseFloat(request.getParameter("hight"));
      String blood=request.getParameter("blood");
      String numb=(String) session.getAttribute("numb");
      pstmt.setInt(1,id);
      pstmt.setString(2,name2);
      pstmt.setString(3,sex2);
      pstmt.setInt(4,age);
      pstmt.setFloat(5,weight);
      pstmt.setFloat(6,hight);
      pstmt.setString(7,blood);
      pstmt.setString(8,numb);  
     
      try{ 
          int n=pstmt.executeUpdate();
          if(n>=1){%>
              重写数据操作成功！<br>
          <%}
          else{%>
             重写数据操作失败！<%=n%><br>
          <%} 
     }catch(Exception e){%>
           重写过程出现异常错误！<br>
           <%=e.getMessage()%>
     <% 
     }
     if(pstmt!=null){ pstmt.close(); }
     if(conn!=null){ conn.close(); } 
    %>
  </body>
</html>
```
# 完整项目图

![在这里插入图片描述](https://img-blog.csdnimg.cn/0f5b3afc86214d21a6f2aa106f123997.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/f7cf07e1b2454f95b67a1610c1694681.png)

