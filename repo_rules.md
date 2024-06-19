# Git and Versioning
***PS: we do not push to production on friday due to obvious reasons***

In the organization we use GIT for version control, code tracking and what other function git was created for (no pun intended).

Kindly smooth up your git commands for the command line gurus or use any other tools that complicates your life more when dealing with git. Our primary git manager is Bit Bucket. Kindly contact the devops team incase you need to have access to any repository or need a new repository.

All code snippets written are owned and copyrighted to Nathan Digital and should be pushed to the respective repo for safe storage.

## Versioning
Every API or release should have a versioning system e.g ***v1 (app/release/routes)*** and ***v2 (app/release/routes)*** ensuring that all the updates including new features so as to track changes and be able to reverse when breakages occur.

## PR and Branching
The setup of every repo should be __development__, __staging__ and __Production__. No one is allowed to push to production and this should be done only  by the devops or deployment team. 

The __development branch__ is the most stable latest version of the app and can be used to create new branches and PRs. 

The __staging__ branch and server is the one to be used by the QA team and for showcase to the customer so that they can tinker with it and give suggestions of changes that can be made to the version.

Every feature and bug should have its own PR and branch opened for that same purpose. The work should be pushed to that branch in readiness for merging.

## Code Review
Every PR should have at least 2 reviewers who approves the PR. The PR should also have a a QA approved badge before being merged into production or staging.

The reason for code reviews is to make sure the code and functionality is up to standard and follows the main goal of the organization.

Code comments should be precise and direct solving a realistic problem. The comment can be in form of a question if needed so as to seek clarification if the one is not sure the real reason why the code is there.

No PR should be merged with un answered or pending comments, its thus advised that comments be limited to questions or code changes suggestions.

There are no stupid questions in code review and one can ask any question in regard to the code. 

We understand that at times code reviews can be brutal but since there is no other way for us to do this, then we all have to grow a pair and take the reviews as they come both good and bad and yes one gets used to it. 

When doing your code review kindly leave no stone unturned for we cannot promise the next person reviewing you code will leave a stone unturned. Its thus prudent that we all go through this so that we can grow and come out of this alive through the support of one another.

## Commit and commit messages
If you haven’t given much thought to what makes a great Git commit message, it may be the case that you haven’t spent much time using git log and related tools. There is a vicious cycle here: because the commit history is unstructured and inconsistent, one doesn’t spend much time using or taking care of it. And because it doesn’t get used or taken care of, it remains unstructured and inconsistent.

But a well-cared for log is a beautiful and useful thing. ```git blame, revert, rebase, log, shortlog``` and other subcommands come to life. Reviewing others’ commits and pull requests becomes something worth doing, and suddenly can be done independently. Understanding why something happened months or years ago becomes not only possible but efficient.

A project’s long-term success rests (among other things) on its maintainability, and a maintainer has few tools more powerful than his project’s log. It’s worth taking the time to learn how to care for one properly. What may be a hassle at first soon becomes habit, and eventually a source of pride and productivity for all involved.

## The seven rules of a great Git commit message
Keep in mind: This has all been said before.

### 1. Separate subject from body with a blank line
An example for this is ```Fix typo in introduction to user guide```
Nothing more need be said; if the reader wonders what the typo was, she can simply take a look at the change itself, i.e. use ```git show``` or ```git diff``` or ```git log -p```

When using the command line, this is an example of a commit message ```git commit -m "Fix typo in introduction to user guide" ```

### 2. Limit the subject line to 50 characters
50 characters is not a hard limit, just a rule of thumb. Keeping subject lines at this length ensures that they are readable, and forces the author to think for a moment about the most concise way to explain what’s going on

***Tip: If you’re having a hard time summarizing, you might be committing too many changes at once. Strive for atomic commits (a topic for a separate post)***

### 3. Capitalize the subject line
This is as simple as it sounds. Begin all subject lines with a capital letter.

For example: ``` Accelerate to 88 miles per hour ```

Instead of: ~~```accelerate to 88 miles per hour```~~

### 4. Do not end the subject line with a period
Trailing punctuation is unnecessary in subject lines. Besides, space is precious when you’re trying to keep them to 50 chars or less.

Example: ```Open the pod bay doors```
Instead of: ~~```Open the pod bay doors```~~

### 5. Use the imperative mood in the subject line
*Imperative mood* just means “spoken or written as if giving a command or instruction”. A few examples:
- Clean your room
- Close the door
- Take out the trash

The imperative can sound a little rude; that’s why we don’t often use it. But it’s perfect for Git commit subject lines. One reason for this is that Git itself uses the imperative whenever it creates a commit on your behalf.

For example, the default message created when using ```git merge``` reads: ```Merge branch 'myfeature'```

And when using ```git revert```: ```Revert "Add the thing with the stuff" This reverts commit cc87791524aedd593cff5a74532befe7ab69ce9d```

So when you write your commit messages in the imperative, you’re following Git’s own built-in conventions. For example:

- Refactor subsystem X for readability
- Update getting started documentation
- Remove deprecated methods
- Release version 1.0.0

Writing this way can be a little awkward at first. We’re more used to speaking in the indicative mood, which is all about reporting facts. That’s why commit messages often end up reading like this:

~~Fixed bug with Y~~

~~Changing behavior of X~~

__A properly formed Git commit subject line should always be able to complete the following sentence:__

If applied, this commit will your subject line here
For example:

- If applied, this commit will ***refactor subsystem X for readability***
- If applied, this commit will ***update getting started documentation***
- If applied, this commit will ***remove deprecated methods***

Notice how this doesn’t work for the other non-imperative forms:

- If applied, this commit will ~~***fixed bug with Y***~~
- If applied, this commit will ~~***changing behavior of X***~~
- If applied, this commit will more ~~***fixes for broken stuff***~~

*Remember: Use of the imperative is important only in the subject line. You can relax this restriction when you’re writing the body.*

### 6. Wrap the body at 72 characters
Git never wraps text automatically. When you write the body of a commit message, you must mind its right margin, and wrap text manually.

The recommendation is to do this at 72 characters, so that Git has plenty of room to indent text while still keeping everything under 80 characters overall.

### 7. Use the body to explain what and why vs. how
In most cases, you can leave out details about how a change has been made. Code is generally self-explanatory in this regard (and if the code is so complex that it needs to be explained in prose, that’s what source comments are for)

```
commit eb0b56b19017ab5c16c745e6da39c53126924ed6
Author: Pieter Wuille <.com>
Date:   Fri Jan 1 22:57:55 2024 +0200

   Simplify serialize.h's exception handling

   Remove the 'state' and 'exceptmask' from serialize.h's stream
   implementations, as well as related methods.

   As exceptmask always included 'failbit', and setstate was always
   called with bits = failbit, all it did was immediately raise an
   exception. Get rid of those variables, and replace the setstate
   with direct exception throwing (which also removes some dead
   code).

   As a result, good() is never reached after a failure (there are
   only 2 calls, one of which is in tests), and can just be replaced
   by !eof().

   fail(), clear(n) and exceptions() are just never called. Delete
   them.
   
   ```