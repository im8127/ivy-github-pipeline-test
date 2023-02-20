# github-actions-demo
## A repo to demonstrate the CI (Continous Integration) process as part of School of Tech.

1. Clone the repo: ```git@github.com:School-Of-Tech-Futures-ATC/github-actions-demo.git```
2. ```cd github-actions-demo```
3. ```npm install```
4. ```npm test```
5. All tests should pass (total 5)
6. Create a brand new GitHub repo and make note of its URL
7. Set your local origin to that of the new repo ```git remote set-url origin git@github.com:<name_of_your_new_repo>.git```

Example:
```
git remote set-url origin git@github.com:School-Of-Tech-Futures-ATC/testing-workflow.git

8. ```git push```
9. Create a new branch in GitHub called **main** and base it off **develop** branch
10. In local repo, go into ***app.js*** file (on develop branch) and break the code somehow!
11. Commit breaking change and push to GitHub
12. Go to GitHub and raise a PR (Pull Request) to merge **develop** into ***main*** branch
9. Merge PR and check the ***Actions*** tab, workflow (pipeline) should have been kicked off
10. Watch it ***fail*** ❌ at test step
11. Fix code locally, re-push and watch workflow ***pass*** ✅!

🎉
