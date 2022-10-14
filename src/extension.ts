// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { RichCopy } from './rich-copy';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "rich-copy" is now active!');

	let richCopy = vscode.commands.registerCommand('rich-copy.richCopy', () => RichCopy.richCopy())
	let richCopyMarkdown = vscode.commands.registerCommand('rich-copy.richCopyMarkdown', () => RichCopy.richCopy(true))

	context.subscriptions.push(richCopy);
	context.subscriptions.push(richCopyMarkdown);
}

// This method is called when your extension is deactivated
export function deactivate() {}
