import * as vscode from 'vscode';

export class RichCopy {

    static async richCopy(markdown = false): Promise<void> {
        const activeTextEditor = vscode.window.activeTextEditor;

        if (activeTextEditor) {
            const selection = activeTextEditor.selection;
            let text = ""

            if (!selection.isEmpty) {
                text = activeTextEditor.document.getText(selection);

                if (markdown) {
                    const mdCode = '```';
                    text = `${mdCode}\n${text}\n${mdCode}`
                }
            }

            let fileName = vscode.workspace.asRelativePath(activeTextEditor.document.uri);

            const date = new Date();
            const lineStart = selection.start.line + 1;
            const lineEnd = selection.end.line + 1;
            const lines = activeTextEditor.document.lineCount;

            let lineText = "";

            if (lineEnd > lineStart) {
                lineText = `lines ${lineStart}-${lineEnd}`;
            } else {
                lineText = `line ${lineStart}`;
            }

            text = `${text}\n(${fileName} - ${lineText} of ${lines})`;
            vscode.env.clipboard.writeText(text);
        }
    }
}