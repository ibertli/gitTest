# gitTest
learn how to use git correctly

#查看git版本
git --version

#列出当前目录的所有文件及目录
ls

# a 表示以 . 开头的文件也会显示，l 表示显示文件的权限 拥有者 建立及修改时间
ls -al

# how to delete a file in remote repo
locate to your local repo
then: git pill.   to confirm that your local repo is sys to your remote repo
then: git rm a.file
then: git commit -m "rm a.file"
them:git push
