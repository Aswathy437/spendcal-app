# TrueSpend: Software Requirements Specification

> Know where your money actually goes.

## 1. Product Vision

TrueSpend is a personal expense tracker that meets users where they already are: their camera roll, their voice, their chat habits. Instead of asking users to manually log every spend, TrueSpend lets them dump a grocery bill photo, a GPay screenshot, or a voice note and handles the rest. The goal is zero-friction logging and honest insight into spending patterns.

## 2. How Users Add Expenses

This is the core of the product. Every input method should feel natural, not like filling a form.

### 2.1 Text Input
- User types in plain language: "spent 500 at more supermarket" or "petrol 800"
- App parses amount, merchant, and suggests a category
- User confirms or overrides the category before saving

### 2.2 Voice Input
- User taps a mic button and speaks the expense
- App transcribes speech, extracts amount and merchant
- Shows a confirmation card before saving

### 2.3 Bill / Receipt Image Upload
- User photographs a physical bill or receipt
- App reads the total amount, merchant name, and date from the image
- Prefills the expense form; user just confirms and saves
- Supports restaurant bills, grocery receipts, pharmacy slips, fuel receipts

### 2.4 Transaction History Screenshot Upload
- User screenshots their GPay, PhonePe, Paytm, CRED, or bank app transaction list
- App scans the image and extracts multiple transactions at once
- Shows a review screen where users can deselect any transaction or change its category
- Saves all confirmed transactions in bulk
- This is the killer feature for users who forget to log and want to catch up weekly

### 2.5 PDF Bank Statement Upload
- User uploads a monthly bank statement PDF
- App extracts all debit transactions with amounts, merchants, and dates
- Same bulk-review screen as screenshot import
- Useful for users who get monthly statements from their bank

### 2.6 Manual Entry
- Traditional form with amount, description, category, and date fields
- Always available as a fallback

## 3. Smart Processing

### 3.1 AI Category Suggestion
- Every expense gets an AI-suggested category based on merchant name and description
- User sees the suggestion with a confidence indicator (High / Medium / Not Sure)
- User can accept with one tap or pick a different category
- App tracks when users override suggestions, which feeds accuracy stats on the dashboard

### 3.2 Merchant Recognition
- App learns merchant names over time
- "Lulu Mall", "More Supermarket", "KFC" always map to the same category without prompting again
- User can view and edit the merchant to category mapping

### 3.3 Duplicate Detection
- If a transaction is imported that matches an existing one (same amount, same date, similar merchant), the app flags it before saving
- Prevents double-counting when users import statements and have already logged manually

### 3.4 Recurring Expense Detection
- App identifies transactions that repeat (same merchant, similar amount, monthly pattern)
- Labels them as "Recurring" automatically: rent, subscriptions, EMIs
- Shows upcoming predicted recurring expenses on the dashboard

## 4. Dashboard

The main screen. Shows what matters at a glance without overwhelming.

### 4.1 This Month Overview
- Total spent this month
- Remaining days in the month
- A simple category breakdown: spending ring or bar chart
- Quick-add button always visible

### 4.2 Category Cards
- Each category shows: amount spent this month, number of transactions, change vs last month (↑18% or ↓5%)
- Tapping a category shows all transactions in it

### 4.3 Recent Expenses Feed
- Chronological list of recent transactions
- Each row shows merchant, category badge, amount, and how it was added (voice / photo / text)
- Tap to edit or delete

### 4.4 Spending Heatmap
- A calendar view where darker days mean more spent
- Helps users spot patterns (do you spend more on weekends? paydays?)

## 5. Insights

This is what makes TrueSpend different from a plain log app. Real insights that change behavior.

### 5.1 True Cost of Habits
- App identifies frequent small spends (coffee, takeaway, cab) and shows annualised cost
- Example: "You've ordered food 11 times this month, that's ₹14,300/year at this rate"
- These appear as insight cards that rotate on the dashboard

### 5.2 Month-over-Month Comparison
- Side-by-side view of this month vs last month per category
- Highlights the biggest increases and decreases

### 5.3 Merchant Frequency
- "You've visited Starbucks 8 times this month"
- "Swiggy is your most used merchant (₹6,200 this month)"

### 5.4 AI Accuracy Rate
- Shows what percentage of AI category suggestions the user accepted
- If it's low, a prompt appears: "Help us learn: review your overridden categories"

### 5.5 Hours-Worked Equivalent (Optional)
- User can optionally enter their monthly salary
- App shows expensive purchases as "= X hours of work"
- Example: "This phone cost you 18 hours of work"
- Can be turned off in settings

### 5.6 Subscription Tracker
- Automatically groups all recurring spends tagged as Entertainment, Software, or user-marked as "subscription"
- Shows total monthly subscription spend in one place
- Flags subscriptions that haven't been used in a while (future phase)

### 5.7 Rhythm
- App silently learns replenishment cycles from 3 months of purchase history
- Detects patterns like: sunscreen every 6 weeks, groceries every 10 days, fuel every 2 weeks, salon every month
- Sends a nudge at the right moment, timed from actual purchase history — not a generic reminder the user set
- The user never configures this. The app figures it out.
- Notification tone: "You usually restock sunscreen around now. Running low?"
- Covers any category where a pattern exists: healthcare, groceries, personal care, transport, dining

### 5.8 Permission to Spend
- When a category is unusually quiet compared to the user's normal pattern, the app checks in
- Only triggers when the user is genuinely under budget and has a spending history in that category
- Not motivational — data-backed. The app knows what's normal for this person and notices the gap.
- Notification tone: "You haven't treated yourself to anything this month. Your budget has room. Something small?"
- Pairs with SpendShape to understand whether low spending in a category is intentional (saving toward a goal) or just a quiet month

## 6. Budget & Goals

### 6.1 Monthly Category Budgets
- User sets a spending limit per category (e.g., Food & Dining: ₹8,000/month)
- Progress bar on each category card shows how much of the budget is used
- Colour shifts from green to amber to red as the limit approaches

### 6.2 Budget Alerts
- Notification when a category hits 80% of its budget
- Notification when a category exceeds its budget

### 6.3 Saving Goals
- User sets a saving target for the month (e.g., "Save ₹5,000 this month")
- Dashboard shows total income (manually entered) minus total spent = projected savings
- Shows whether the user is on track

## 7. Expense History & Search

### 7.1 Full History View
- All expenses in reverse chronological order
- Filterable by: category, date range, input type, amount range
- Searchable by merchant name or description

### 7.2 Category Detail View
- All transactions in a category for the selected month
- Subtotal at the top
- Month selector to browse previous months

## 8. Reports & Export

### 8.1 Monthly Report
- Autogenerated at end of each month
- Summary: total spent, top category, biggest single expense, vs previous month
- Visual breakdown by category

### 8.2 Export Options
- Export any date range to CSV
- Export monthly report to PDF (clean, shareable format)
- Useful for splitting expenses with a partner or submitting reimbursements

## 9. User Settings

- **Currency**: set once, used everywhere (₹, $, AED, etc.)
- **Categories**: user can rename categories or add custom ones
- **Merchant mappings**: view and edit what category each merchant maps to
- **Budget reset day**: choose when the monthly cycle resets (1st of month or salary date)
- **Hours-worked mode**: enter salary to enable true cost view
- **Notifications**: toggle budget alerts, weekly summary reminder

## 10. What TrueSpend Is NOT

- Not a bank account connector (no Plaid, no account linking; privacy first)
- Not a bill payment app
- Not a shared household finance tool (single user, single currency per account)
- Not an investment tracker

These are deliberate exclusions to keep the product focused and trustworthy.

## 11. SpendShape (Upcoming)

SpendShape is a personalized spending blueprint auto-generated from the user's income, transaction history, and spending personality. Unlike generic budgeting rules (50/30/20), SpendShape is calibrated to who this specific person actually is.

### How it generates

- Analyses 2-3 months of transaction history (or day-one if the user imports via screenshot or PDF)
- Asks a short conversational onboarding (not a form) to understand priorities and personality
- Factors in income, recurring expenses, and which categories the user consistently overspends or regrets

### What it produces

A recommended monthly allocation per category, unique to the user. Not what a generic budget says they should spend — what makes sense given their actual life, habits, and values.

### How it stays alive

- Recalculates when income changes
- Adjusts when habits shift consistently over multiple months
- If a category is overspent repeatedly, the app asks whether to adjust the shape or treat it as a target to work toward

### Personality signals it reads

- Regret frequency per category (from regret tracking)
- Impulsive vs planned spending patterns
- Spending spikes during stressful periods
- Which categories produce guilt vs satisfaction over time

### Visual representation

SpendShape renders as a radar/polygon chart where each axis is a spending category. The shape is literally unique to each user. Two people with the same income will have different shapes based on their values and behavior.
