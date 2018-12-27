# DAO设计模式             

## 程序分层   
    * 显示层View+控制层Control+业务层Service+数据层DAO            
    * 数据层DAO，专门进行数据库的原子操作
    * 业务层BO，service，调用多个数据层操作，完成整体项目的业务设计
    * 不同层访问，定义访问标准，依赖倒置 

## DAO设计
    * 变化部分：不同数据库连接方式不同，不同数据库具体CRUD不同
    * 不变部分：数据库处理流程：连接，CURD，关闭连接
    * DatabaseConnection数据库连接类：获取/关闭数据库连接
    * ValueObject VO 与表结构一一对应，用于传递数据
    * DAO，每个表对应一个DAO
    * DatabaseConnection的操作由业务层处理
    * 数据库的连接管理与数据库CRUD必须解耦，因为数据库管理与业务相关，一个业务操作只应该处理一次，而一个业务可能处理CRUD多次
    * 业务层对数据层的访问，facade封装，使控制层对数据层不可见

## Demo  
    * 实现功能：add people， list people，show people
    * 完整的项目结构
    * DAO JS实现
    * 连接MongoDB和MySQL
    * Service可以理解成model层的facade
    * Controller可以理解成View层的adapter
    * 为了提高性能，数据库连接管理可以做优化，只连接一次

## Reference
    * https://blog.csdn.net/coderbruis/article/details/72723840
    * http://www.mldn.cn/course/75/task/1518/show