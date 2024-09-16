import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import FontSelector from "./FontSelector"; // The custom extension we created

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontSelector.configure({
        fonts: [
          "Arial",
          "Courier New",
          "Georgia",
          "Times New Roman",
          "Verdana",
        ],
      }),
    ],
    content: "<p>Hello World! You can change fonts here!</p>",
  });

  const [selectedFont, setSelectedFont] = useState("Arial");

  const changeFont = (font) => {
    setSelectedFont(font);
    editor.chain().focus().setFont(font).run();
  };

  return (
    <div>
      <h2>Custom Font Selector</h2>
      <div>
        <label htmlFor="font-select">Choose a font: </label>
        <select
          id="font-select"
          value={selectedFont}
          onChange={(e) => changeFont(e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
